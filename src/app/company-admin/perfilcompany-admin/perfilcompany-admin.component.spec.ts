import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilcompanyAdminComponent } from './perfilcompany-admin.component';

describe('PerfilcompanyAdminComponent', () => {
  let component: PerfilcompanyAdminComponent;
  let fixture: ComponentFixture<PerfilcompanyAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilcompanyAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilcompanyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
