import { BadRequestException } from '@nestjs/common';

export abstract class SanitizePipeBase {
  protected abstract readonly dangerousPatterns: RegExp[];

  private checkDangerousPatterns(string: string): boolean {
    for (const pattern of this.dangerousPatterns) {
      if (pattern.test(string)) {
        return true;
      }
    }
    return false;
  }

  private checkObjectForDangerousContent(obj: any) {
    for (const key of Object.keys(obj)) {
      const val = obj[key];

      if (typeof val === 'string' && this.checkDangerousPatterns(val)) {
        throw new BadRequestException(`Invalid input: Dangerous content detected in property <${key}>`);
      }

      if (typeof val === 'object' && val !== null) {
        this.checkObjectForDangerousContent(val);
      }
    }
  }

  protected check(value: any) {
    if (typeof value === 'string' && value.trim().length !== 0) {
      if (this.checkDangerousPatterns(value)) {
        throw new BadRequestException('Invalid input: Dangerous content detected');
      }
    }

    if (typeof value === 'object' && value !== null) {
      this.checkObjectForDangerousContent(value);
    }
  }
}
