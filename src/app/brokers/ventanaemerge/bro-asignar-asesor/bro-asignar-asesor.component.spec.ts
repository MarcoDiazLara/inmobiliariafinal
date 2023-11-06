import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroAsignarAsesorComponent } from './bro-asignar-asesor.component';

describe('BroAsignarAsesorComponent', () => {
  let component: BroAsignarAsesorComponent;
  let fixture: ComponentFixture<BroAsignarAsesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroAsignarAsesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BroAsignarAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
