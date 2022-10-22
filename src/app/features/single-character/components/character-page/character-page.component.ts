import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

import { Character } from './../../models/character';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss'],
})
export class CharacterPageComponent {
  @Input() character?: Character | null;

  constructor(private _location: Location) {}

  goBack(): void {
    this._location.back();
  }
}
