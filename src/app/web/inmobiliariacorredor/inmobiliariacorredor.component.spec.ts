import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmobiliariacorredorComponent } from './inmobiliariacorredor.component';

describe('InmobiliariacorredorComponent', () => {
  let component: InmobiliariacorredorComponent;
  let fixture: ComponentFixture<InmobiliariacorredorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InmobiliariacorredorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InmobiliariacorredorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
