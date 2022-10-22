import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { URL } from '../../../shared/constants/apiUrl';
import { Character } from './../models/character';
import { Movies } from './../models/movies';

@Injectable({
  providedIn: 'root',
})
export class SingleCharacterService {
  constructor(private _http: HttpClient) {}

  getSingleCharacter(id: string): Observable<Character> {
    return this._http.get<Character>(URL.singleCharUrl + id);
  }

  getMovieList(id: string): Observable<Movies> {
    return this._http.get<Movies>(id);
  }
}
