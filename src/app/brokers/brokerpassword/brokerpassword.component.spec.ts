import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerpasswordComponent } from './brokerpassword.component';

describe('BrokerpasswordComponent', () => {
  let component: BrokerpasswordComponent;
  let fixture: ComponentFixture<BrokerpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
