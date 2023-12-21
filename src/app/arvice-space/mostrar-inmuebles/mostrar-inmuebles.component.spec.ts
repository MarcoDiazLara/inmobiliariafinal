import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarInmueblesComponent } from './mostrar-inmuebles.component';

describe('MostrarInmueblesComponent', () => {
  let component: MostrarInmueblesComponent;
  let fixture: ComponentFixture<MostrarInmueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarInmueblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarInmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
