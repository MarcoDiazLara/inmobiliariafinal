import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterEstatususuarioComponent } from './master-estatususuario.component';

describe('MasterEstatususuarioComponent', () => {
  let component: MasterEstatususuarioComponent;
  let fixture: ComponentFixture<MasterEstatususuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterEstatususuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterEstatususuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
