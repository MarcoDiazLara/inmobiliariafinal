import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvitafraudeComponent } from './evitafraude.component';

describe('EvitafraudeComponent', () => {
  let component: EvitafraudeComponent;
  let fixture: ComponentFixture<EvitafraudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvitafraudeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvitafraudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
