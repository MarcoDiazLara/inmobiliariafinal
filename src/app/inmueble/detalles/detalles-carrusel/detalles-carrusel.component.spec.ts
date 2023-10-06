import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesCarruselComponent } from './detalles-carrusel.component';

describe('DetallesCarruselComponent', () => {
  let component: DetallesCarruselComponent;
  let fixture: ComponentFixture<DetallesCarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesCarruselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
