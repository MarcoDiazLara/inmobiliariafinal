import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlubibComponent } from './plubib.component';

describe('PlubibComponent', () => {
  let component: PlubibComponent;
  let fixture: ComponentFixture<PlubibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlubibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlubibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
