import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovedadesactulidadComponent } from './novedadesactulidad.component';

describe('NovedadesactulidadComponent', () => {
  let component: NovedadesactulidadComponent;
  let fixture: ComponentFixture<NovedadesactulidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovedadesactulidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovedadesactulidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
