import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoinmuebleComponent } from './infoinmueble.component';

describe('InfoinmuebleComponent', () => {
  let component: InfoinmuebleComponent;
  let fixture: ComponentFixture<InfoinmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoinmuebleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoinmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
