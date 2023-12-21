import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatusUsuComponent } from './estatus-usu.component';

describe('EstatusUsuComponent', () => {
  let component: EstatusUsuComponent;
  let fixture: ComponentFixture<EstatusUsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstatusUsuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstatusUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
