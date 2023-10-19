import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionescompanyAdminComponent } from './notificacionescompany-admin.component';

describe('NotificacionescompanyAdminComponent', () => {
  let component: NotificacionescompanyAdminComponent;
  let fixture: ComponentFixture<NotificacionescompanyAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificacionescompanyAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificacionescompanyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
