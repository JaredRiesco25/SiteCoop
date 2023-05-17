import { Component, HostListener, Renderer2 ,OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
  scrollingDown = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.scrollingDown = offset > 0; // Cambia el valor para controlar cuándo se activa el efecto
  }

}
