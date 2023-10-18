import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmobiliariasComponent } from './inmobiliarias.component';

describe('InmobiliariasComponent', () => {
  let component: InmobiliariasComponent;
  let fixture: ComponentFixture<InmobiliariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InmobiliariasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InmobiliariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
