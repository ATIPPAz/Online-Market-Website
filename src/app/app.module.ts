//module
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ApiModule } from './modules/api.module'
import { Api } from './modules/api'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

//layout
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component'
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component'
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component'

//page
import { LoginComponentPage } from './pages/login-page/login-page.component'
import { ContactComponentPage } from './pages/contact-page/contact-page.component'
import { HomeComponentPage } from './pages/home-page/home-page.component'
import { OtherPageComponentPage } from './pages/other-page/other-page.component'
import { RegisterComponentPage } from './pages/register-page/register-page.component'

//component
import { NavbarComponent } from './components/utils/navbar/navbar.component'
import { HomeComponent } from './components/home/home.component'
import { ContactComponent } from './components/contact/contact.component'
import { LoginComponent } from './components/login/login.component'
import { OtherComponent } from './components/other/other.component'
import { CarouselComponent } from './components/utils/carousel/carousel.component'
import { RecommendShopComponent } from './components/recommend-shop/recommend-shop.component'
import { RegisterComponent } from './components/register/register.component'
import { FooterComponent } from './components/utils/footer/footer.component';
import { MarketPageComponent } from './pages/market-page/market-page.component';
import { TopshopComponent } from './components/topshop/topshop.component';
import { CardTopshopComponent } from './components/card-topshop/card-topshop.component';
import { NoPageComponent } from './components/no-page/no-page.component';
import { MarketIdPageComponent } from './pages/market-id-page/market-id-page.component'
import {MarketComponent } from './components/market/market.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BlogComponent } from './components/blog/blog.component';
import { ProduceComponent } from './components/produce/produce.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { ShopComponent } from './components/shop/shop.component';
import { CategoriesProductComponent } from './components/categories-product/categories-product.component'
import { BlogIdPageComponent } from './pages/blog-id-page/blog-id-page.component';
import { TitleShopComponent } from './components/title-shop/title-shop.component';
import { MarketIdComponent } from './components/market-id/market-id.component';
import { OurShopsComponent } from './components/our-shops/our-shops.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { DescriptionComponent } from './components/description/description.component';
import { ImgComponent } from './components/img/img.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { PlaceOrderrPageComponent } from './pages/place-orderr-page/place-orderr-page.component'


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
    RegisterComponentPage,
    OtherPageComponentPage,
    CarouselComponent,
    RecommendShopComponent,
    RegisterComponent,
    BlankLayoutComponent,
    FooterComponent,
    MarketPageComponent,
    TopshopComponent,
    CardTopshopComponent,
    MarketComponent,
    NoPageComponent,
    MarketIdPageComponent,
    AboutUsPageComponent,
    AboutUsComponent,
    BlogPageComponent,
    BlogComponent,
    ProduceComponent,
    ShopPageComponent,
    ShopComponent,
    CategoriesProductComponent,
    BlogIdPageComponent,
    TitleShopComponent,
    MarketIdComponent,
    OurShopsComponent,
    ProductDetailPageComponent,
    DescriptionComponent,
    ImgComponent,
    CartPageComponent,
    PlaceOrderrPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ApiModule, Api],
  bootstrap: [AppComponent],
})
export class AppModule {}
