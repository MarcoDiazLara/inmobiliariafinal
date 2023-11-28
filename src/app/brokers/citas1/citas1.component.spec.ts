import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Citas1Component } from './citas1.component';

describe('Citas1Component', () => {
  let component: Citas1Component;
  let fixture: ComponentFixture<Citas1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Citas1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Citas1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
