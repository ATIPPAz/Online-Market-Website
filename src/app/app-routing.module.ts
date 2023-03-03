import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component'
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component'
import { HomeComponent } from './pages/home/home.component'
import { ContactComponent } from './pages/contact/contact.component'
import { LoginComponent } from './pages/login/login.component'

const routes: Routes = [
  // app routes
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      // {
      //   path: 'contact',
      //   loadChildren: () =>
      //     import('./layouts/default-layout/default.module').then(
      //       (e) => e.DefaultModule
      //     ),
      // },
    ],
  },
  // login routes
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
