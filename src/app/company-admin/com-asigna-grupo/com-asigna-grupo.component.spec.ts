import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComAsignaGrupoComponent } from './com-asigna-grupo.component';

describe('ComAsignaGrupoComponent', () => {
  let component: ComAsignaGrupoComponent;
  let fixture: ComponentFixture<ComAsignaGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComAsignaGrupoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComAsignaGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
