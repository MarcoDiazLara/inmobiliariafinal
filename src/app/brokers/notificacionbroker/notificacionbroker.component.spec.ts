import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionbrokerComponent } from './notificacionbroker.component';

describe('NotificacionbrokerComponent', () => {
  let component: NotificacionbrokerComponent;
  let fixture: ComponentFixture<NotificacionbrokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificacionbrokerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificacionbrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
