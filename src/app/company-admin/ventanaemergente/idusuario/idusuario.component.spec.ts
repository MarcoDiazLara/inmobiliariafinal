import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdusuarioComponent } from './idusuario.component';

describe('IdusuarioComponent', () => {
  let component: IdusuarioComponent;
  let fixture: ComponentFixture<IdusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdusuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
