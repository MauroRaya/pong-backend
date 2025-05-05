import { Injectable, PipeTransform, ArgumentMetadata } from '@nestjs/common';
import { SanitizePipeBase } from './sanitize.pipe';

@Injectable()
export class SanitizeSQLPipe extends SanitizePipeBase implements PipeTransform {
  protected readonly dangerousPatterns = [
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

  transform(value: any, metadata: ArgumentMetadata) {
    this.check(value);
    return value;
  }
}
