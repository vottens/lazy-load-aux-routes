import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LazyComponent } from './lazy.component';
import { Aux1Component } from './aux1/aux1.component';
import { Aux2Component } from './aux2/aux2.component';
import { Aux3Component } from './aux3/aux3.component';

const routes = [
  {
    path: '',
    component: LazyComponent,
    children: [
      {
        path: 'aux1',
        component: Aux1Component,
        outlet: 'aux'
      },
      {
        path: 'aux2',
        component: Aux2Component,
        outlet: 'aux'
      },
      {
        path: 'aux3',
        component: Aux3Component,
        outlet: 'aux'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    LazyComponent,
    Aux1Component,
    Aux2Component,
    Aux3Component,
  ],
  exports: [
    LazyComponent,
    Aux1Component,
    Aux2Component,
    Aux3Component,
    RouterModule
  ]
})
export class LazyModule { }
