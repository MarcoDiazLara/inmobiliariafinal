import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactadosComponent } from './contactados.component';

describe('ContactadosComponent', () => {
  let component: ContactadosComponent;
  let fixture: ComponentFixture<ContactadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
