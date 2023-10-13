import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RematehipotecarioComponent } from './rematehipotecario.component';

describe('RematehipotecarioComponent', () => {
  let component: RematehipotecarioComponent;
  let fixture: ComponentFixture<RematehipotecarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RematehipotecarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RematehipotecarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
