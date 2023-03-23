import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ApiModule } from './modules/api.module'
import { Api } from './modules/api'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component'
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component'

//page
import { LoginComponentPage } from './pages/login-page/login-page.component'
import { ContactComponentPage } from './pages/contact-page/contact-page.component'
import { HomeComponentPage } from './pages/home-page/home-page.component'
import { OtherPageComponentPage } from './pages/other-page/other-page.component'

//component
import { NavbarComponent } from './components/utils/navbar/navbar.component'
import { HttpClientModule } from '@angular/common/http'
import { HomeComponent } from './components/home/home.component'
import { ContactComponent } from './components/contact/contact.component'
import { LoginComponent } from './components/login/login.component'
import { OtherComponent } from './components/other/other.component';
import { CarouselComponent } from './components/utils/carousel/carousel.component';
import { RecommendShopComponent } from './components/recommend-shop/recommend-shop.component'

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    LoginLayoutComponent,
    LoginComponentPage,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponentPage,
    ContactComponentPage,
    OtherComponent,
    OtherPageComponentPage,
    CarouselComponent,
    RecommendShopComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ApiModule, Api],
  bootstrap: [AppComponent],
})
export class AppModule {}
