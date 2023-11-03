import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAsignarReasignarComponent } from './company-asignar-reasignar.component';

describe('CompanyAsignarReasignarComponent', () => {
  let component: CompanyAsignarReasignarComponent;
  let fixture: ComponentFixture<CompanyAsignarReasignarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyAsignarReasignarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyAsignarReasignarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
