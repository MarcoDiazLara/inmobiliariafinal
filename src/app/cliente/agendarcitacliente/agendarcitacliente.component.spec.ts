import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarcitaclienteComponent } from './agendarcitacliente.component';

describe('AgendarcitaclienteComponent', () => {
  let component: AgendarcitaclienteComponent;
  let fixture: ComponentFixture<AgendarcitaclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendarcitaclienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendarcitaclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
