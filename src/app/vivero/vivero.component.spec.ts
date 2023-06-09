import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViveroComponent } from './vivero.component';

describe('ViveroComponent', () => {
  let component: ViveroComponent;
  let fixture: ComponentFixture<ViveroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViveroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViveroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
