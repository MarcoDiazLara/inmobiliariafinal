import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizaciondeinmueblesComponent } from './visualizaciondeinmuebles.component';

describe('VisualizaciondeinmueblesComponent', () => {
  let component: VisualizaciondeinmueblesComponent;
  let fixture: ComponentFixture<VisualizaciondeinmueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizaciondeinmueblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizaciondeinmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
