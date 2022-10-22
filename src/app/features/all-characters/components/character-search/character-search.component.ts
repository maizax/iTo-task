import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.scss'],
})
export class CharacterSearchComponent {
  @Output() searchCharacter: EventEmitter<string> = new EventEmitter<string>();

  search(event: Event): void {
    const searchText = (event.target as HTMLTextAreaElement).value;
    this.searchCharacter.emit(searchText);
  }
}
