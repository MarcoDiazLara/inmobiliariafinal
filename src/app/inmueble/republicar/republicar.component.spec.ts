import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepublicarComponent } from './republicar.component';

describe('RepublicarComponent', () => {
  let component: RepublicarComponent;
  let fixture: ComponentFixture<RepublicarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepublicarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepublicarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
