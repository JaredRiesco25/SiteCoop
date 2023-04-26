import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidadoAnimalComponent } from './cuidado-animal.component';

describe('CuidadoAnimalComponent', () => {
  let component: CuidadoAnimalComponent;
  let fixture: ComponentFixture<CuidadoAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuidadoAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuidadoAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
