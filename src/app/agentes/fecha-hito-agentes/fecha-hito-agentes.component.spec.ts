import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaHitoAgentesComponent } from './fecha-hito-agentes.component';

describe('FechaHitoAgentesComponent', () => {
  let component: FechaHitoAgentesComponent;
  let fixture: ComponentFixture<FechaHitoAgentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechaHitoAgentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FechaHitoAgentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
