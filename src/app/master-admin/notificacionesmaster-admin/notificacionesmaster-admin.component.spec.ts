import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionesmasterAdminComponent } from './notificacionesmaster-admin.component';

describe('NotificacionesmasterAdminComponent', () => {
  let component: NotificacionesmasterAdminComponent;
  let fixture: ComponentFixture<NotificacionesmasterAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificacionesmasterAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificacionesmasterAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
