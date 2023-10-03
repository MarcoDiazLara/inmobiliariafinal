import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenugloguedoComponent } from './menugloguedo.component';

describe('MenugloguedoComponent', () => {
  let component: MenugloguedoComponent;
  let fixture: ComponentFixture<MenugloguedoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenugloguedoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenugloguedoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
