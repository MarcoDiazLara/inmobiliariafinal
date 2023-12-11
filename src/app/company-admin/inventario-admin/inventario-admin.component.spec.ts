import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioAdminComponent } from './inventario-admin.component';

describe('InventarioAdminComponent', () => {
  let component: InventarioAdminComponent;
  let fixture: ComponentFixture<InventarioAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
