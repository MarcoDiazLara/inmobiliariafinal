import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompAsignaGrupoComponent } from './comp-asigna-grupo.component';

describe('CompAsignaGrupoComponent', () => {
  let component: CompAsignaGrupoComponent;
  let fixture: ComponentFixture<CompAsignaGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompAsignaGrupoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompAsignaGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
