import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaUsuariosComponent } from './pantalla-usuarios.component';

describe('PantallaUsuariosComponent', () => {
  let component: PantallaUsuariosComponent;
  let fixture: ComponentFixture<PantallaUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
