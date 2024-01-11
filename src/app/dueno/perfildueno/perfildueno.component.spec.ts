import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilduenoComponent } from './perfildueno.component';

describe('PerfilduenoComponent', () => {
  let component: PerfilduenoComponent;
  let fixture: ComponentFixture<PerfilduenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilduenoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilduenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
