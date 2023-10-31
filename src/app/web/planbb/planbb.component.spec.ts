import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanbbComponent } from './planbb.component';

describe('PlanbbComponent', () => {
  let component: PlanbbComponent;
  let fixture: ComponentFixture<PlanbbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanbbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanbbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
