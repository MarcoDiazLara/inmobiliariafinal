import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargadeinmueblesComponent } from './cargadeinmuebles.component';

describe('CargadeinmueblesComponent', () => {
  let component: CargadeinmueblesComponent;
  let fixture: ComponentFixture<CargadeinmueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargadeinmueblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargadeinmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
