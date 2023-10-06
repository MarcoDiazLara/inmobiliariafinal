import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticulaComponent } from './particula.component';

describe('ParticulaComponent', () => {
  let component: ParticulaComponent;
  let fixture: ComponentFixture<ParticulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
