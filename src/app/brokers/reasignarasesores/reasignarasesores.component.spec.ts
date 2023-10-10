import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasignarasesoresComponent } from './reasignarasesores.component';

describe('ReasignarasesoresComponent', () => {
  let component: ReasignarasesoresComponent;
  let fixture: ComponentFixture<ReasignarasesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReasignarasesoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReasignarasesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
