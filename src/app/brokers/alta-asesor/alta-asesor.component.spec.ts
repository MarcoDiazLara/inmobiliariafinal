import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaAsesorComponent } from './alta-asesor.component';

describe('AltaAsesorComponent', () => {
  let component: AltaAsesorComponent;
  let fixture: ComponentFixture<AltaAsesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaAsesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
