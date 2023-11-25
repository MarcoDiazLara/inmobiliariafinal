import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetododepagoComponent } from './metododepago.component';

describe('MetododepagoComponent', () => {
  let component: MetododepagoComponent;
  let fixture: ComponentFixture<MetododepagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetododepagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetododepagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
