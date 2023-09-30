import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiopasswordComponent } from './cambiopassword.component';

describe('CambiopasswordComponent', () => {
  let component: CambiopasswordComponent;
  let fixture: ComponentFixture<CambiopasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiopasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambiopasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
