import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructoradesarrolladoraComponent } from './constructoradesarrolladora.component';

describe('ConstructoradesarrolladoraComponent', () => {
  let component: ConstructoradesarrolladoraComponent;
  let fixture: ComponentFixture<ConstructoradesarrolladoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructoradesarrolladoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructoradesarrolladoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
