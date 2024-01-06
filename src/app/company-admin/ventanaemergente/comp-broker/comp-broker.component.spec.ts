import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompBrokerComponent } from './comp-broker.component';

describe('CompBrokerComponent', () => {
  let component: CompBrokerComponent;
  let fixture: ComponentFixture<CompBrokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompBrokerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompBrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
