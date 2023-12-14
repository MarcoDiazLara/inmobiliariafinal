import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosbrokerComponent } from './usuariosbroker.component';

describe('UsuariosbrokerComponent', () => {
  let component: UsuariosbrokerComponent;
  let fixture: ComponentFixture<UsuariosbrokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosbrokerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosbrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
