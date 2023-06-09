import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratorioDepartamentoComponent } from './laboratorio-departamento.component';

describe('LaboratorioDepartamentoComponent', () => {
  let component: LaboratorioDepartamentoComponent;
  let fixture: ComponentFixture<LaboratorioDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboratorioDepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratorioDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
