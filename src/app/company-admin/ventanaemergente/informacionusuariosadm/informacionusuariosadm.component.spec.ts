import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionusuariosadmComponent } from './informacionusuariosadm.component';

describe('InformacionusuariosadmComponent', () => {
  let component: InformacionusuariosadmComponent;
  let fixture: ComponentFixture<InformacionusuariosadmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionusuariosadmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionusuariosadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
