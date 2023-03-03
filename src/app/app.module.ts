import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component'
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component'
import { LoginComponent } from './pages/login/login.component'
import { ContactComponent } from './pages/contact/contact.component'
import { HomeComponent } from './pages/home/home.component'
import { NavbarComponent } from './components/utils/navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    LoginLayoutComponent,
    LoginComponent,
    ContactComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
