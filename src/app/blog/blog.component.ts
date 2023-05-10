import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  imagenBase64!: string;
  ImageUrl!: any;
  titulo!:string;
  Subtitulo!:string;

  titulo2!:string;
  Subtitulo2!:string;
  imagenBase642!: string;

  titulo3!:string;
  Subtitulo3!:string;
  imagenBase643!: string;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://WS_TiendaCoop.innovativepartner.tech//Guardar/ObtenFavoritos/88').subscribe(response => {
      this.ImageUrl=response;
      this.imagenBase64= 'data:image/png;base64,'+this.ImageUrl[1].Imagen;
      this.titulo = this.ImageUrl[1].Clave;
      this.Subtitulo = this.ImageUrl[1].Nombre;

      this.imagenBase642= 'data:image/png;base64,'+this.ImageUrl[2].Imagen;
      this.titulo2 = this.ImageUrl[2].Clave;
      this.Subtitulo2 = this.ImageUrl[2].Nombre;

      this.imagenBase643= 'data:image/png;base64,'+this.ImageUrl[3].Imagen;
      this.titulo3 = this.ImageUrl[3].Clave;
      this.Subtitulo3 = this.ImageUrl[3].Nombre;
    }
    );
  }

}
