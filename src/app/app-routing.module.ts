import { NgModule } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
