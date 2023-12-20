import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarReasignarUserComponent } from './asignar-reasignar-user.component';

describe('AsignarReasignarUserComponent', () => {
  let component: AsignarReasignarUserComponent;
  let fixture: ComponentFixture<AsignarReasignarUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarReasignarUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarReasignarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
