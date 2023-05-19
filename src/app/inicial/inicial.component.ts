import { Component, OnInit,ElementRef  } from '@angular/core';
import { OrientacionService  } from '../orientacion.service';
@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.scss']
})
export class InicialComponent implements OnInit {
  currentIndex = 0;
  videos: string[] = ['../../assets/Videos/carrusel11.mp4', '../../assets/Videos/carrusel22.mp4', '../../assets/Videos/carrusel33.mp4', '../../assets/Videos/carrusel44.mp4'];
  constructor(private elRef: ElementRef,private orientationService: OrientacionService) { }
  videoSeleccionado: number = this.currentIndex;

  cambiarVideo(): void {
    const videoElement = document.getElementById('miVideo') as HTMLVideoElement;
    console.log(this.currentIndex);

    videoElement.src = `assets/${this.videos[this.currentIndex]}`;
    videoElement.load();
    videoElement.play();
  }

  ngOnInit(): void {
    this.orientationService.lockOrientation();

    setInterval(() => {
      this.cambiarVideo();
      this.currentIndex = (this.currentIndex + 1) % 4;
    }, 8100);;
  }

  prevslide(): void {
    this.currentIndex = (this.currentIndex === 0) ? 3 : this.currentIndex - 1;

    this.cambiarVideo();
  }
  
  nextslide(): void {
    this.currentIndex = (this.currentIndex === 3) ? 0 : this.currentIndex + 1;
    
    this.cambiarVideo();
  }
}
