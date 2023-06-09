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
import { BoostComponent } from './boost/boost.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BlogComponent } from './blog/blog.component';
import { LaboratorioComponent } from './laboratorio/laboratorio.component';
import { FerreteriaComponent } from './ferreteria/ferreteria.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { FertilizanteComponent } from './fertilizante/fertilizante.component';
import { ViveroComponent } from './vivero/vivero.component';
import { LaboratorioDepartamentoComponent } from './laboratorio-departamento/laboratorio-departamento.component';


const routes: Routes = [
  {path: '', redirectTo: '/inicial', pathMatch: 'full'}, //Redirigir en ruta vacía
/*   {path: 'inicio', component:InicioComponent},
 */  {path: 'sectoragro', component:SectorAgricolaComponent},
/*   {path: 'SectorUrbano', component:SectorUrbanoComponent},
 */  {path:'cuidadoAnimal', component:CuidadoAnimalComponent},
/*   {path: 'principal', component:PrincipalComponent},
 */  {path: 'contacto', component:ContactoComponent},
/*   {path:  'footer', component:FooterComponent},
 */  {path:  'servicioscoop', component:ServiciosComponent},
/*   {path:  'boo', component:BoostComponent},
 *//*   { path: 'carousel', component: CarouselComponent },
 */  {path:  'inicial', component:InicialComponent},
  {path:  'laboratorio', component:LaboratorioComponent},
  {path:'blog', component:BlogComponent},
  {path:'ferreteria', component:FerreteriaComponent},
  {path:'fertilizante', component:FertilizanteComponent},
  {path:'mascotas', component:MascotasComponent},
  {path:'boutique', component:BoutiqueComponent},
  {path:'laboratorioDepartamento', component:LaboratorioDepartamentoComponent},
  {path:'vivero', component:ViveroComponent},
  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
