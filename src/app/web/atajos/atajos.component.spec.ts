import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtajosComponent } from './atajos.component';

describe('AtajosComponent', () => {
  let component: AtajosComponent;
  let fixture: ComponentFixture<AtajosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtajosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
