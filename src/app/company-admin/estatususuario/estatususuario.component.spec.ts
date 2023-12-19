import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatususuarioComponent } from './estatususuario.component';

describe('EstatususuarioComponent', () => {
  let component: EstatususuarioComponent;
  let fixture: ComponentFixture<EstatususuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstatususuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstatususuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
