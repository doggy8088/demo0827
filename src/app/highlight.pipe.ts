import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: string, keyword: string): any {
    return value.replace(keyword, '<mark>'+keyword+'</mark>', );
  }

}
