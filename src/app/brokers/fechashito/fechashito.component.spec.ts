import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechashitoComponent } from './fechashito.component';

describe('FechashitoComponent', () => {
  let component: FechashitoComponent;
  let fixture: ComponentFixture<FechashitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechashitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FechashitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
