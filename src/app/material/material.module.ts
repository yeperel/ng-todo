import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

const modules = [MatSlideToggleModule, MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatDividerModule]; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules,
  ], exports: [modules],

})
export class MaterialModule { }
