import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentepasswordComponent } from './agentepassword.component';

describe('AgentepasswordComponent', () => {
  let component: AgentepasswordComponent;
  let fixture: ComponentFixture<AgentepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentepasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
