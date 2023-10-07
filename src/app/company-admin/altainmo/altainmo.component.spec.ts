import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltainmoComponent } from './altainmo.component';

describe('AltainmoComponent', () => {
  let component: AltainmoComponent;
  let fixture: ComponentFixture<AltainmoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltainmoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltainmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
