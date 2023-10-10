import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarcitaComponent } from './agendarcita.component';

describe('AgendarcitaComponent', () => {
  let component: AgendarcitaComponent;
  let fixture: ComponentFixture<AgendarcitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendarcitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendarcitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
