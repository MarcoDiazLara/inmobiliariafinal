import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmuebledetallesadminComponent } from './inmuebledetallesadmin.component';

describe('InmuebledetallesadminComponent', () => {
  let component: InmuebledetallesadminComponent;
  let fixture: ComponentFixture<InmuebledetallesadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InmuebledetallesadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InmuebledetallesadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
