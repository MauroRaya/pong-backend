import { Injectable, PipeTransform, ArgumentMetadata } from '@nestjs/common';
import { SanitizePipeBase } from './sanitize.pipe';

@Injectable()
export class SanitizeXSSPipe extends SanitizePipeBase implements PipeTransform {
  protected readonly dangerousPatterns = [
    /<script.*?>.*?<\/script>/gi,
    /javascript:/gi,
    /eval\((.*?)\)/gi,
    /document\.write\(.*?\)/gi,
    /<.*?on\w+.*?>/gi,
    /<.*?style=".*?expression\(.*?\).*?>/gi,
  ];

  transform(value: any, metadata: ArgumentMetadata) {
    this.check(value);
    return value;
  }
}
