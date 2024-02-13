import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizarInmueblesComponent } from './autorizar-inmuebles.component';

describe('AutorizarInmueblesComponent', () => {
  let component: AutorizarInmueblesComponent;
  let fixture: ComponentFixture<AutorizarInmueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorizarInmueblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorizarInmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
