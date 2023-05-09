import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  currentIndex = 0;

  ngOnInit(): void {
/*     setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % 3;
      console.log(this.currentIndex);
    }, 1000); */

    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % 3;
    }, 3000);
  }
}
