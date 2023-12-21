import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Requisitos3dComponent } from './requisitos3d.component';

describe('Requisitos3dComponent', () => {
  let component: Requisitos3dComponent;
  let fixture: ComponentFixture<Requisitos3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Requisitos3dComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Requisitos3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
