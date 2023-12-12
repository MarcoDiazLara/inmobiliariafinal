import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminhitoComponent } from './adminhito.component';

describe('AdminhitoComponent', () => {
  let component: AdminhitoComponent;
  let fixture: ComponentFixture<AdminhitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminhitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminhitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
