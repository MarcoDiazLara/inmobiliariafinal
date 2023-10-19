import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAdminpasswordComponent } from './company-adminpassword.component';

describe('CompanyAdminpasswordComponent', () => {
  let component: CompanyAdminpasswordComponent;
  let fixture: ComponentFixture<CompanyAdminpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyAdminpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyAdminpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
