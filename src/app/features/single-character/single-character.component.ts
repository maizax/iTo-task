import { Observable, switchMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { SingleCharacterService } from './services/single-character.service';
import { Character } from './models/character';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.scss'],
})
export class SingleCharacterComponent implements OnInit {
  character$?: Observable<Character> | null;

  constructor(
    private _route: ActivatedRoute,
    private _singleCharacterService: SingleCharacterService
  ) {}

  ngOnInit(): void {
    this.character$ = this._route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this._singleCharacterService.getSingleCharacter(params.get('id')!)
      )
    );
  }
}
