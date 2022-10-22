import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { SingleCharacterRoutingModule } from './single-character-routing.module';
import { SingleCharacterComponent } from './single-character.component';
import { CharacterPageComponent } from './components/character-page/character-page.component';
import { UrlToMovieNamePipe } from 'src/app/shared/pipes/url-to-movie-name.pipe';

@NgModule({
  declarations: [
    SingleCharacterComponent,
    CharacterPageComponent,
    UrlToMovieNamePipe,
  ],
  imports: [CommonModule, MaterialModule, SingleCharacterRoutingModule],
})
export class SingleCharacterModule {}
