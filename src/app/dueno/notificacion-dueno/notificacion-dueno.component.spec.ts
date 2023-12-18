import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionDuenoComponent } from './notificacion-dueno.component';

describe('NotificacionDuenoComponent', () => {
  let component: NotificacionDuenoComponent;
  let fixture: ComponentFixture<NotificacionDuenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificacionDuenoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificacionDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
