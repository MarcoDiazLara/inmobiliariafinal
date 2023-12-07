import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoinmuebleComponent } from './catalogoinmueble.component';

describe('CatalogoinmuebleComponent', () => {
  let component: CatalogoinmuebleComponent;
  let fixture: ComponentFixture<CatalogoinmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoinmuebleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoinmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
