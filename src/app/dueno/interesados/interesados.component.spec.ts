import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteresadosComponent } from './interesados.component';

describe('InteresadosComponent', () => {
  let component: InteresadosComponent;
  let fixture: ComponentFixture<InteresadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteresadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteresadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
