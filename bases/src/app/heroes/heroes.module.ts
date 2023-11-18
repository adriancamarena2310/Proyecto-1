import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { ListComponente } from './list/liste.component';

@NgModule({
  exports: [
    HeroComponent,
    ListComponente,
  ],
  declarations: [
    HeroComponent,
    ListComponente,
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
