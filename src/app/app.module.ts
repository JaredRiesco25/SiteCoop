import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { SectorAgricolaComponent } from './sector-agricola/sector-agricola.component';


import { SectorUrbanoComponent } from './sector-urbano/sector-urbano.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    SectorAgricolaComponent,
    SectorUrbanoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
