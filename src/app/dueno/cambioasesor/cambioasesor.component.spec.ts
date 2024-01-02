import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioasesorComponent } from './cambioasesor.component';

describe('CambioasesorComponent', () => {
  let component: CambioasesorComponent;
  let fixture: ComponentFixture<CambioasesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambioasesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambioasesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
