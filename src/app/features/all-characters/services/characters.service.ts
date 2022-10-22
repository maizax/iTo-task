import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { URL } from '../../../shared/constants/apiUrl';
import { Characters } from './../models/characters';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private _http: HttpClient) {}

  getCharacters(searchInput: string, pageNumber: string): Observable<Characters> {
    return this._http.get<Characters>(URL.baseUrl + searchInput + '&page=' + pageNumber);
  }
}
