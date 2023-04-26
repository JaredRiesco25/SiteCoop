import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorUrbanoComponent } from './sector-urbano.component';

describe('SectorUrbanoComponent', () => {
  let component: SectorUrbanoComponent;
  let fixture: ComponentFixture<SectorUrbanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectorUrbanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorUrbanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
