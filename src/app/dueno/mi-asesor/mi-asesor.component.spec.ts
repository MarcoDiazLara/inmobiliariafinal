import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiAsesorComponent } from './mi-asesor.component';

describe('MiAsesorComponent', () => {
  let component: MiAsesorComponent;
  let fixture: ComponentFixture<MiAsesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiAsesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
