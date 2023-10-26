import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanacitaComponent } from './ventanacita.component';

describe('VentanacitaComponent', () => {
  let component: VentanacitaComponent;
  let fixture: ComponentFixture<VentanacitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanacitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentanacitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
