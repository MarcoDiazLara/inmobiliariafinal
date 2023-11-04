import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompAsignarAsesorComponent } from './comp-asignar-asesor.component';

describe('CompAsignarAsesorComponent', () => {
  let component: CompAsignarAsesorComponent;
  let fixture: ComponentFixture<CompAsignarAsesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompAsignarAsesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompAsignarAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
