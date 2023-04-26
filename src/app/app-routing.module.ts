import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SectorAgricolaComponent } from './sector-agricola/sector-agricola.component';
import { SectorUrbanoComponent } from './sector-urbano/sector-urbano.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'}, //Redirigir en ruta vacía
  {path: 'inicio', component:InicioComponent},
  {path: 'sectoragro', component:SectorAgricolaComponent},
  {path: 'SectorUrbano', component:SectorUrbanoComponent},
  {path:  'footer', component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
