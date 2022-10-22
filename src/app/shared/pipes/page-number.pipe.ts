import { Pipe, PipeTransform } from '@angular/core';

import { Characters } from './../../features/all-characters/models/characters';

@Pipe({
  name: 'pageNumber',
})
export class PageNumberPipe implements PipeTransform {
  transform(value: Characters | undefined | null): string {
    const charactersCount = value?.count;
    const totalPages =
      charactersCount! < 10 ? 1 : Math.ceil(charactersCount! / 10);
    const nextPage = Number(value?.next?.replace(/\D/g, ''));
    const previousPage = Number(value?.previous?.replace(/\D/g, ''));
    if (nextPage) {
      return `${nextPage - 1} / ${totalPages}`;
    }
    if (previousPage) {
      return `${previousPage + 1} / ${totalPages}`;
    }

    return '1 / 1';
  }
}
