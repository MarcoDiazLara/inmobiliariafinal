import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvesntarioComponent } from './invesntario.component';

describe('InvesntarioComponent', () => {
  let component: InvesntarioComponent;
  let fixture: ComponentFixture<InvesntarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvesntarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvesntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
