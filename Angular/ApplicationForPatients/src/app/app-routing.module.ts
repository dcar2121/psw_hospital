import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';

const routes: Routes = [
// {
//   path: '',
//   component: LandingPageComponent
// }, 
  {
    
    path: 'patient',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layout/layout.module').then(mod => mod.LayoutModule)
      }
    ]
    
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
