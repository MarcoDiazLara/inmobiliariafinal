import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArviceSpaceComponent } from './arvice-space.component';

describe('ArviceSpaceComponent', () => {
  let component: ArviceSpaceComponent;
  let fixture: ComponentFixture<ArviceSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArviceSpaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArviceSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
