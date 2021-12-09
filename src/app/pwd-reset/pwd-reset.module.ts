import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PwdResetPageRoutingModule } from './pwd-reset-routing.module';

import { PwdResetPage } from './pwd-reset.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PwdResetPageRoutingModule
  ],
  declarations: [PwdResetPage]
})
export class PwdResetPageModule {}
