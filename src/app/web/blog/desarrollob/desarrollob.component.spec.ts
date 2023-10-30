import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrollobComponent } from './desarrollob.component';

describe('DesarrollobComponent', () => {
  let component: DesarrollobComponent;
  let fixture: ComponentFixture<DesarrollobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesarrollobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesarrollobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
