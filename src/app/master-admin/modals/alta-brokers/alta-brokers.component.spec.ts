import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaBrokersComponent } from './alta-brokers.component';

describe('AltaBrokersComponent', () => {
  let component: AltaBrokersComponent;
  let fixture: ComponentFixture<AltaBrokersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaBrokersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaBrokersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
