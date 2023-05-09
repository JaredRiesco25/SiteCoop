import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  currentIndex = 0;
  constructor(private http: HttpClient) {

    this.http.get('http://WS_TiendaCoop.innovativepartner.tech//Guardar/ObtenFavoritos/88').subscribe(data => {
  console.log(data);
});

   }

  ngOnInit(): void {

  }
}
