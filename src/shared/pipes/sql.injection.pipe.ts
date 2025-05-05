import { PipeTransform, Injectable, BadRequestException, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class SQLInjectionPipe implements PipeTransform {
    private readonly dangerousPatterns = [
        /--/i,
        /;/i,
        /'/i,
        /"/i,
        /DROP/i,
        /SELECT/i,
        /INSERT/i,
        /UPDATE/i,
        /DELETE/i,
        /\bUNION\b/i,
        /\bOR\b/i,
        /\bAND\b/i,
    ];

    private checkDangerousPatterns(string: string): boolean {
        for (const pattern of this.dangerousPatterns) {
            if (pattern.test(string)) {
                return true;
            }
        }
        return false;
    }

    private checkObjectForSQLInjection(obj: any) {
        for (const key of Object.keys(obj)) {
            const val = obj[key];

            if (typeof val === 'string' && this.checkDangerousPatterns(val)) {
                throw new BadRequestException(`Invalid input: SQL Injection detected in property <${key}>`);
            }

            if (typeof val === 'object' && val !== null) {
                this.checkObjectForSQLInjection(val);
            }
        }
    }

    transform(value: any, metadata: ArgumentMetadata) {
        if (typeof value === 'string' && value.trim().length !== 0) {
            if (this.checkDangerousPatterns(value)) {
                throw new BadRequestException('Invalid input: SQL Injection detected');
            }
        }

        if (typeof value === 'object' && value !== null) {
            this.checkObjectForSQLInjection(value);
        }

        return value;
    }
}
