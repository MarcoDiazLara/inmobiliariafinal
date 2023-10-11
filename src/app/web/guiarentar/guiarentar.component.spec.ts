import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiarentarComponent } from './guiarentar.component';

describe('GuiarentarComponent', () => {
  let component: GuiarentarComponent;
  let fixture: ComponentFixture<GuiarentarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiarentarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuiarentarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
