import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuierescomprarComponent } from './quierescomprar.component';

describe('QuierescomprarComponent', () => {
  let component: QuierescomprarComponent;
  let fixture: ComponentFixture<QuierescomprarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuierescomprarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuierescomprarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
