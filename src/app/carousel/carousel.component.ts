import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  imagenBase64!: string;
  ImageUrl!: any;
  titulo!:string;
  Subtitulo!:string;
  texto!:string;
  constructor(private http: HttpClient) {

/*   this.http.get('http://WS_TiendaCoop.innovativepartner.tech//Guardar/ObtenFavoritos/88').subscribe(data => {
  this.resultado=data;
}
); */
 
   }

  ngOnInit(): void {
    this.http.get('http://WS_TiendaCoop.innovativepartner.tech//Guardar/ObtenFavoritos/88').subscribe(response => {
      this.ImageUrl=response;
      this.imagenBase64= 'data:image/png;base64,'+this.ImageUrl[0].Imagen;
      this.titulo = this.ImageUrl[0].Nombre;
      this.Subtitulo = this.ImageUrl[0].Clave;
      this.texto = this.ImageUrl[0].Precio;

    }
    );  
  }
}
