import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepomexComponent } from './sepomex.component';

describe('SepomexComponent', () => {
  let component: SepomexComponent;
  let fixture: ComponentFixture<SepomexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepomexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SepomexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
