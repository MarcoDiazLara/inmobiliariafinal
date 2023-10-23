import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignasrasesorComponent } from './asignasrasesor.component';

describe('AsignasrasesorComponent', () => {
  let component: AsignasrasesorComponent;
  let fixture: ComponentFixture<AsignasrasesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignasrasesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignasrasesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
