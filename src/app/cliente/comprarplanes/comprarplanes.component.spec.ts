import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarplanesComponent } from './comprarplanes.component';

describe('ComprarplanesComponent', () => {
  let component: ComprarplanesComponent;
  let fixture: ComponentFixture<ComprarplanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprarplanesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprarplanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
