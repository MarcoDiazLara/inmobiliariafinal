import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikegraficaComponent } from './likegrafica.component';

describe('LikegraficaComponent', () => {
  let component: LikegraficaComponent;
  let fixture: ComponentFixture<LikegraficaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikegraficaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikegraficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
