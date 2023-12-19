import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatusComponent } from './estatus.component';

describe('EstatusComponent', () => {
  let component: EstatusComponent;
  let fixture: ComponentFixture<EstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
