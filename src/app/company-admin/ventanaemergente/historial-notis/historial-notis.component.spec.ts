import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialNotisComponent } from './historial-notis.component';

describe('HistorialNotisComponent', () => {
  let component: HistorialNotisComponent;
  let fixture: ComponentFixture<HistorialNotisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialNotisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialNotisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
