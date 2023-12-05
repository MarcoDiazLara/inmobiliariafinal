import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanadetallesInmuebleComponent } from './ventanadetalles-inmueble.component';

describe('VentanadetallesInmuebleComponent', () => {
  let component: VentanadetallesInmuebleComponent;
  let fixture: ComponentFixture<VentanadetallesInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanadetallesInmuebleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentanadetallesInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
