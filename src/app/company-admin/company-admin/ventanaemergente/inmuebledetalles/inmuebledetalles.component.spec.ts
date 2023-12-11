import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmuebledetallesComponent } from './inmuebledetalles.component';

describe('InmuebledetallesComponent', () => {
  let component: InmuebledetallesComponent;
  let fixture: ComponentFixture<InmuebledetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InmuebledetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InmuebledetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
