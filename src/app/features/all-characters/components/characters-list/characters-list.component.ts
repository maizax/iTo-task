import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Characters } from './../../models/characters';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent {
  @Input() characters?: Characters | null;
  @Output() previousPage: EventEmitter<string | null> = new EventEmitter<string | null>();
  @Output() nextPage: EventEmitter<string | null> = new EventEmitter<string | null>();

  previous(url?: string | null): void {
    const id = this.transformUrl(url);
    this.previousPage.emit(url);
  }

  next(url?: string | null): void {
    const id = this.transformUrl(url);
    this.nextPage.emit(url);
  }

  transformUrl(url?: string | null): string {
    return url!.replace(/\D/g, '');
  }
}
