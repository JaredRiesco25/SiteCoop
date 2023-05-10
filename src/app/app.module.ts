import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { SectorAgricolaComponent } from './sector-agricola/sector-agricola.component';
import { HttpClientModule } from '@angular/common/http';


import { SectorUrbanoComponent } from './sector-urbano/sector-urbano.component';
import { FooterComponent } from './footer/footer.component';
import { CuidadoAnimalComponent } from './cuidado-animal/cuidado-animal.component';
import { PrincipalComponent } from './principal/principal.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { InicialComponent } from './inicial/inicial.component';
import { BoostComponent } from './boost/boost.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    SectorAgricolaComponent,
    SectorUrbanoComponent,
    FooterComponent,
    CuidadoAnimalComponent,
    PrincipalComponent,
    ContactoComponent,
    ServiciosComponent,
    InicialComponent,
    BoostComponent,
    CarouselComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
