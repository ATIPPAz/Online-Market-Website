import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component'
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component'
import { HomeComponentPage } from './pages/home-page/home-page.component'
import { ContactComponentPage } from './pages/contact-page/contact-page.component'
import { LoginComponentPage } from './pages/login-page/login-page.component'
import { OtherPageComponentPage } from './pages/other-page/other-page.component'
import { RegisterComponentPage } from './pages/register-page/register-page.component'
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component'
import { MarketPageComponent } from './pages/market-page/market-page.component'
import { NoPageComponent } from './components/no-page/no-page.component'

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
        component: HomeComponentPage,
      },
      {
        path: 'contact',
        component: ContactComponentPage,
      },
      {
        path: 'market',
        component: MarketPageComponent,
      },
      {
        path: 'other',
        component: OtherPageComponentPage,
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
    component: BlankLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponentPage,
      },
    ],
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'register',
        component: RegisterComponentPage,
      },
    ],
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: '**',
        component: NoPageComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
