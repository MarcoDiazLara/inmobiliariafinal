import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarasesoresComponent } from './eliminarasesores.component';

describe('EliminarasesoresComponent', () => {
  let component: EliminarasesoresComponent;
  let fixture: ComponentFixture<EliminarasesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarasesoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarasesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
