import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokersAsignarReasignarComponent } from './brokers-asignar-reasignar.component';

describe('BrokersAsignarReasignarComponent', () => {
  let component: BrokersAsignarReasignarComponent;
  let fixture: ComponentFixture<BrokersAsignarReasignarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokersAsignarReasignarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokersAsignarReasignarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
