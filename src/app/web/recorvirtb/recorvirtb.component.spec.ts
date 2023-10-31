import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecorvirtbComponent } from './recorvirtb.component';

describe('RecorvirtbComponent', () => {
  let component: RecorvirtbComponent;
  let fixture: ComponentFixture<RecorvirtbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecorvirtbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecorvirtbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
