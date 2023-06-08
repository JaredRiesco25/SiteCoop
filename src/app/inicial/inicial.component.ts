import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.scss']
})
export class InicialComponent implements OnInit {
  currentIndex = 0;

  constructor() { }

  ngOnInit(): void {
      setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % 4;
      console.log(this.currentIndex);
    }, 5000);
  }
  prevslide(): void {
    this.currentIndex = (this.currentIndex === 0) ? 3 : this.currentIndex - 1;
  }
  
  nextslide(): void {
    this.currentIndex = (this.currentIndex === 3) ? 0 : this.currentIndex + 1;
  }

}
