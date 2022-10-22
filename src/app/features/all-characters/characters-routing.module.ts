import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SingleCharacterComponent } from '../single-character/single-character.component';
import { CharactersComponent } from './characters.component';

const routes: Routes = [{ path: '', component: CharactersComponent }, { path: ':id', component: SingleCharacterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
