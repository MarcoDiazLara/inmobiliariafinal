import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioagentesComponent } from './inventarioagentes.component';

describe('InventarioagentesComponent', () => {
  let component: InventarioagentesComponent;
  let fixture: ComponentFixture<InventarioagentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioagentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioagentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
