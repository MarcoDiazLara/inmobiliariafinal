import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuinmuebleComponent } from './menuinmueble.component';

describe('MenuinmuebleComponent', () => {
  let component: MenuinmuebleComponent;
  let fixture: ComponentFixture<MenuinmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuinmuebleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuinmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
