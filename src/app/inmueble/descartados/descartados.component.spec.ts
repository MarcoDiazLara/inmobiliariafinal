import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescartadosComponent } from './descartados.component';

describe('DescartadosComponent', () => {
  let component: DescartadosComponent;
  let fixture: ComponentFixture<DescartadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescartadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescartadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
