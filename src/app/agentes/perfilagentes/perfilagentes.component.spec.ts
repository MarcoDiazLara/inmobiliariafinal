import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilagentesComponent } from './perfilagentes.component';

describe('PerfilagentesComponent', () => {
  let component: PerfilagentesComponent;
  let fixture: ComponentFixture<PerfilagentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilagentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilagentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
