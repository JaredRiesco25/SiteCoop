import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorAgricolaComponent } from './sector-agricola.component';

describe('SectorAgricolaComponent', () => {
  let component: SectorAgricolaComponent;
  let fixture: ComponentFixture<SectorAgricolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectorAgricolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorAgricolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
