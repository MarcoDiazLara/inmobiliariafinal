import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmueblesComponent } from './inmuebles.component';

describe('InmueblesComponent', () => {
  let component: InmueblesComponent;
  let fixture: ComponentFixture<InmueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InmueblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
