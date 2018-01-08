import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { SpecialsComponent } from './specials/specials.component';
import { DataService } from './service/data.service';

const appRoutes : Routes =[
  {path: '', component: IndexComponent, pathMatch:'full'},
  {path: 'menu', component: MenuComponent, pathMatch:'full'},
  {path: 'special-menu', component: SpecialsComponent, pathMatch:'full'},
  {path: 'about-us', component: AboutComponent, pathMatch:'full'},
  {path: 'contact-us', component: ContactComponent, pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    MenuComponent,
    CarouselComponent,
    IndexComponent,
    SpecialsComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    CarouselModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCSgS2jko8tVjc0F80LUeh3iJFwPLevSQQ'
    }),
    RouterModule.forRoot(appRoutes)

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
