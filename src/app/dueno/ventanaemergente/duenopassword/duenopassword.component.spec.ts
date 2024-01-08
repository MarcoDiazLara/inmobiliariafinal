import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuenopasswordComponent } from './duenopassword.component';

describe('DuenopasswordComponent', () => {
  let component: DuenopasswordComponent;
  let fixture: ComponentFixture<DuenopasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuenopasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuenopasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
