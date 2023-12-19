import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosInteresadosComponent } from './datos-interesados.component';

describe('DatosInteresadosComponent', () => {
  let component: DatosInteresadosComponent;
  let fixture: ComponentFixture<DatosInteresadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosInteresadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosInteresadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
