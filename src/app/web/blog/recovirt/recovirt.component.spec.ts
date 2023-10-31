import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecovirtComponent } from './recovirt.component';

describe('RecovirtComponent', () => {
  let component: RecovirtComponent;
  let fixture: ComponentFixture<RecovirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecovirtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecovirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
