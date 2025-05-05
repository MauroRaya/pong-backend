import { Injectable, PipeTransform, ArgumentMetadata } from '@nestjs/common';
import { SanitizePipeBase } from './sanitize.pipe';

@Injectable()
export class SanitizeXSSPipe extends SanitizePipeBase implements PipeTransform {
  protected readonly dangerousPatterns = [
    // Matches <script> tags and any content inside them
    /<script[^>]*>.*?<\/script>/gi,

    // Matches javascript: URL scheme
    /javascript:/gi,

    // Matches eval(), setTimeout(), setInterval(), Function(), atob(), btoa(), etc.
    /(eval|setTimeout|setInterval|Function|atob|btoa)\(.*?\)/gi,

    // Matches document.write() method
    /document\.write\(.*?\)/gi,

    // Matches inline event handlers like onclick, onmouseover, etc.
    /<.*?\bon\w+[^>]*>/gi,

    // Matches style="expression()" CSS code (legacy)
    /<.*?style=".*?expression\([^>]*\).*?"/gi,

    // Matches dangerous URL schemes like data:, vbscript:, etc.
    /(javascript:|data:|vbscript:|file:|about:)/gi,

    // Matches iframe, object, embed, or applet tags
    /<(iframe|object|embed|applet)[^>]*>/gi,

    // Matches potentially dangerous attributes like src, href, action, etc.
    /<\w+[^>]*\s+(src|href|action|data-[\w-]+)=/gi,

    // Matches potential dangerous content in attributes
    /<.*?["'`].*?["'`]/gi,

    // Matches variable declarations like let, const, and var
    /\b(let|const|var)\s+[a-zA-Z_$][0-9a-zA-Z_$]*\s*(=|;|\s*=>)/gi,

    // Matches template literal interpolation: ${} syntax
    /\$\{.*?}/gi,

    // Matches access to dangerous document properties and methods
    /\bdocument\.(cookie|location|write|getElementById|getElementsByClassName|getElementsByTagName|querySelector|querySelectorAll)\b/gi
  ];

  transform(value: any, metadata: ArgumentMetadata) {
    this.check(value);
    return value;
  }
}
