import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistadeinmuebleComponent } from './vistadeinmueble.component';

import { WebModule } from 'src/app/web/web.module';

describe('VistadeinmuebleComponent', () => {
  let component: VistadeinmuebleComponent;
  let fixture: ComponentFixture<VistadeinmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistadeinmuebleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistadeinmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
