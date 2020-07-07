import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BlankModalPage } from './blank-modal.page';

const routes: Routes = [
  {
    path: '',
    component: BlankModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BlankModalPage],
  entryComponents: [BlankModalPage]
})
export class BlankModalPageModule { }
