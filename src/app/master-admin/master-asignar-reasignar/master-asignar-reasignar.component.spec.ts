import { ComponentFixture, TestBed } from '@angular/core/testing';


import { MasterAsignarReasignarComponent } from './master-asignar-reasignar.component';

describe('MasterAsignarReasignarComponent', () => {
  let component: MasterAsignarReasignarComponent;
  let fixture: ComponentFixture<MasterAsignarReasignarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterAsignarReasignarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterAsignarReasignarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
