import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterestatusComponent } from './masterestatus.component';

describe('MasterestatusComponent', () => {
  let component: MasterestatusComponent;
  let fixture: ComponentFixture<MasterestatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterestatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
