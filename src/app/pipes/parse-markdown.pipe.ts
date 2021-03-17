import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import snarkdown from 'snarkdown';

@Pipe({
  name: 'parseMarkdown'
})
export class ParseMarkdownPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(content: string) : string | null {
    let html = snarkdown(content);
    return this.sanitizer.sanitize(SecurityContext.HTML, html)
  }

}
