import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatCardModule],
  exports: [MatToolbarModule, MatCardModule],
})
export class MaterialModule {}
