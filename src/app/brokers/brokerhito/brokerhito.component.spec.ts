import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerhitoComponent } from './brokerhito.component';

describe('BrokerhitoComponent', () => {
  let component: BrokerhitoComponent;
  let fixture: ComponentFixture<BrokerhitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerhitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerhitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
