import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientepasswordComponent } from './clientepassword.component';

describe('ClientepasswordComponent', () => {
  let component: ClientepasswordComponent;
  let fixture: ComponentFixture<ClientepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientepasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
