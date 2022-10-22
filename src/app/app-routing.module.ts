import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'characters',
    loadChildren: () =>
      import('./features/all-characters/characters.module').then(
        (m) => m.CharactersModule
      ),
  },
  {
    path: 'character/:id',
    loadChildren: () =>
      import('./features/single-character/single-character.module').then(
        (m) => m.SingleCharacterModule
      ),
  },
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: '**', redirectTo: '/characters' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
