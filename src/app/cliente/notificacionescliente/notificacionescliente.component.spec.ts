import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionesclienteComponent } from './notificacionescliente.component';

describe('NotificacionesclienteComponent', () => {
  let component: NotificacionesclienteComponent;
  let fixture: ComponentFixture<NotificacionesclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificacionesclienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificacionesclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
