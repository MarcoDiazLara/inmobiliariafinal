import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacioninmuebleComponent } from './informacioninmueble.component';

describe('InformacioninmuebleComponent', () => {
  let component: InformacioninmuebleComponent;
  let fixture: ComponentFixture<InformacioninmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacioninmuebleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacioninmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
