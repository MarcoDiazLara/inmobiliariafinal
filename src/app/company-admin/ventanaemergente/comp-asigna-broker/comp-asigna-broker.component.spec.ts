import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompAsignaBrokerComponent } from './comp-asigna-broker.component';

describe('CompAsignaBrokerComponent', () => {
  let component: CompAsignaBrokerComponent;
  let fixture: ComponentFixture<CompAsignaBrokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompAsignaBrokerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompAsignaBrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
