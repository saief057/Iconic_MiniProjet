import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PwdResetPage } from './pwd-reset.page';

const routes: Routes = [
  {
    path: '',
    component: PwdResetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PwdResetPageRoutingModule {}
