import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({selector: 'test', template: 'test'})
class TestComponent {}
@Component({selector: 'not-found', template: '404 not found'})
class NotFoundComponent {}

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'not-found',
        component: NotFoundComponent
      },
      {
        path: '**',
        component: TestComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'not-found'
  },
];
