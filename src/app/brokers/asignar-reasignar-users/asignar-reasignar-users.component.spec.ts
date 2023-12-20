import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarReasignarUsersComponent } from './asignar-reasignar-users.component';

describe('AsignarReasignarUsersComponent', () => {
  let component: AsignarReasignarUsersComponent;
  let fixture: ComponentFixture<AsignarReasignarUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarReasignarUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarReasignarUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
