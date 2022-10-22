import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CharactersComponent } from './characters.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterSearchComponent } from './components/character-search/character-search.component';
import { UrlToIdPipe } from 'src/app/shared/pipes/url-to-id.pipe';
import { PageNumberPipe } from 'src/app/shared/pipes/page-number.pipe';

@NgModule({
  declarations: [
    CharactersComponent,
    CharactersListComponent,
    CharacterSearchComponent,
    UrlToIdPipe,
    PageNumberPipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CharactersRoutingModule,
    ReactiveFormsModule,
  ],
})
export class CharactersModule {}
