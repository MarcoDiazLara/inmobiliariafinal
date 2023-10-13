import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltasocioComponent } from './altasocio.component';

describe('AltasocioComponent', () => {
  let component: AltasocioComponent;
  let fixture: ComponentFixture<AltasocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltasocioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltasocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
