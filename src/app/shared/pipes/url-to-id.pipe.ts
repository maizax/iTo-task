import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlToId',
})
export class UrlToIdPipe implements PipeTransform {
  transform(url: string): string {
    const id = url.replace(/\D/g, '');
    return id;
  }
}
