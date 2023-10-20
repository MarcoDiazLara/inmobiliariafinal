import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilmasterAdminComponent } from './perfilmaster-admin.component';

describe('PerfilmasterAdminComponent', () => {
  let component: PerfilmasterAdminComponent;
  let fixture: ComponentFixture<PerfilmasterAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilmasterAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilmasterAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
