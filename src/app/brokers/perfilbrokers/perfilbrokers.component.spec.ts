import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilbrokersComponent } from './perfilbrokers.component';

describe('PerfilbrokersComponent', () => {
  let component: PerfilbrokersComponent;
  let fixture: ComponentFixture<PerfilbrokersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilbrokersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilbrokersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
