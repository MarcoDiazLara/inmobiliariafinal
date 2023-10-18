import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieresvenderComponent } from './quieresvender.component';

describe('QuieresvenderComponent', () => {
  let component: QuieresvenderComponent;
  let fixture: ComponentFixture<QuieresvenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuieresvenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuieresvenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
