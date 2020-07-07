import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CurrencyListPage } from './currency-list.page';
import { PipesModule } from 'src/pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: CurrencyListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    IonicModule,
    PipesModule
  ],
  declarations: [CurrencyListPage],
  entryComponents: [
    CurrencyListPage
  ]
})
export class CurrencyListPageModule { }
