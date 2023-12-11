import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionInmuebleComponent } from './informacion-inmueble.component';

describe('InformacionInmuebleComponent', () => {
  let component: InformacionInmuebleComponent;
  let fixture: ComponentFixture<InformacionInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionInmuebleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
