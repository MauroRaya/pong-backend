import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import * as sanitizeHtml from 'sanitize-html';

@Injectable()
export class SanitizePipe implements PipeTransform {
    private sanitizeObject(obj: any): any {
        const sanitized = {}

        for (const key of Object.keys(obj)) {
            const value = obj[key]

            if (typeof value === 'string') {
                sanitized[key] = sanitizeHtml(value);
            }
            else if (typeof value === 'object' && value !== null) {
                sanitized[key] = this.sanitizeObject(value);
            }
            else {
                sanitized[key] = value;
            }
        }

        return sanitized;
    }

    transform(value: any, metadata: ArgumentMetadata) {
        if (typeof value === 'string') {
            return sanitizeHtml(value);
        }

        if (typeof value === 'object' && value !== null) {
            return this.sanitizeObject(value);
        }

        return value;
    }
}