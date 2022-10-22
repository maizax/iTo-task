import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { Characters } from './models/characters';
import { CharactersService } from './services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters$?: Observable<Characters> | null;
  subject = new BehaviorSubject('');
  pageNumber: string = '1';

  constructor(private _charactersService: CharactersService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characters$ = this.subject.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((searchText: string) =>
        this._charactersService.getCharacters(searchText, this.pageNumber)
      )
    );
  }

  searchCharacter(value: string): void {
    this.subject.next(value);
  }

  previousPage(url: string | null): void {
    this.pageNumber = url!.replace(/\D/g, '');
    this.getCharacters();
  }

  nextPage(url: string | null): void {
    this.pageNumber = url!.replace(/\D/g, '');
    this.getCharacters();
  }
}
