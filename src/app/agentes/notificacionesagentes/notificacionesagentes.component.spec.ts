import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionesagentesComponent } from './notificacionesagentes.component';

describe('NotificacionesagentesComponent', () => {
  let component: NotificacionesagentesComponent;
  let fixture: ComponentFixture<NotificacionesagentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificacionesagentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificacionesagentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
