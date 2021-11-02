import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageLayoutComponent } from './homepage/homepage-layout/homepage-layout.component';

const routes: Routes = [
// {
//   path: '',
//   component: LandingPageComponent
// },
{
  path: '',
  redirectTo: 'patient',
  pathMatch: 'full',
}, 
  {  
    path: 'patient',
    component: HomepageLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./homepage/homepage-layout/homepage-layout.module').then(mod => mod.HomepageLayoutModule)
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
