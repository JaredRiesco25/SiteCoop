import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SectorAgricolaComponent } from './sector-agricola/sector-agricola.component';
import { SectorUrbanoComponent } from './sector-urbano/sector-urbano.component';
import { FooterComponent } from './footer/footer.component';
import { CuidadoAnimalComponent } from './cuidado-animal/cuidado-animal.component';
import { PrincipalComponent } from './principal/principal.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { InicialComponent } from './inicial/inicial.component';

const routes: Routes = [
  {path: '', redirectTo: '/principal', pathMatch: 'full'}, //Redirigir en ruta vacía
  {path: 'inicio', component:InicioComponent},
  {path: 'sectoragro', component:SectorAgricolaComponent},
  {path: 'SectorUrbano', component:SectorUrbanoComponent},
  {path:'cuidadoAnimal', component:CuidadoAnimalComponent},
  {path: 'principal', component:PrincipalComponent},
  {path: 'contacto', component:ContactoComponent},
  {path:  'footer', component:FooterComponent},
  {path:  'servicios', component:ServiciosComponent},
  {path:  'inicial', component:InicialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
