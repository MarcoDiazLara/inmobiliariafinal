import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterAdminpasswordComponent } from './master-adminpassword.component';

describe('MasterAdminpasswordComponent', () => {
  let component: MasterAdminpasswordComponent;
  let fixture: ComponentFixture<MasterAdminpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterAdminpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterAdminpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
