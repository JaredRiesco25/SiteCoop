import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrientacionService {
  lockOrientation(): void {
    const lockOrientation = screen.orientation.lock || screen.orientation['lock'];
    if (lockOrientation) {
      lockOrientation.call(screen.orientation, 'portrait-primary').catch(() => {});
    }
  }
  constructor() { }
}
