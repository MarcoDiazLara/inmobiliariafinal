import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoclienteComponent } from './seguimientocliente.component';

describe('SeguimientoclienteComponent', () => {
  let component: SeguimientoclienteComponent;
  let fixture: ComponentFixture<SeguimientoclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguimientoclienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeguimientoclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
