import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmueblesParecidosComponent } from './inmuebles-parecidos.component';

describe('InmueblesParecidosComponent', () => {
  let component: InmueblesParecidosComponent;
  let fixture: ComponentFixture<InmueblesParecidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InmueblesParecidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InmueblesParecidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
