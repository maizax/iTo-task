import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';

import { SingleCharacterService } from 'src/app/features/single-character/services/single-character.service';

@Pipe({
  name: 'urlToMovieName',
})
export class UrlToMovieNamePipe implements PipeTransform {
  constructor(private _singleCharacterService: SingleCharacterService) {}

  transform(url: string): Observable<string> {
    return this._singleCharacterService.getMovieList(url).pipe(
      map((movie) => {
        return movie.title;
      })
    );
  }
}
