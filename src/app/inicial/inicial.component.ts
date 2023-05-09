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

}
