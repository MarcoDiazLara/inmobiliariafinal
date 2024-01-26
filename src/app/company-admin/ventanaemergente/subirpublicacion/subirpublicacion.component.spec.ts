import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirpublicacionComponent } from './subirpublicacion.component';

describe('SubirpublicacionComponent', () => {
  let component: SubirpublicacionComponent;
  let fixture: ComponentFixture<SubirpublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubirpublicacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubirpublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
