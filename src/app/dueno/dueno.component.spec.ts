import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuenoComponent } from './dueno.component';

describe('DuenoComponent', () => {
  let component: DuenoComponent;
  let fixture: ComponentFixture<DuenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuenoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
