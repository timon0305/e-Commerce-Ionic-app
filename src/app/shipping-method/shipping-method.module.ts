import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShippingMethodPage } from './shipping-method.page';
import { PipesModule } from 'src/pipes/pipes.module';


const routes: Routes = [
  {
    path: '',
    component: ShippingMethodPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PipesModule,
    PipesModule
  ],
  declarations: [ShippingMethodPage]
})
export class ShippingMethodPageModule { }
