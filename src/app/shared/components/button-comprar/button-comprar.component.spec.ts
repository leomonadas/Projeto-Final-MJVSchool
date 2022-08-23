import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComprarComponent } from './button-comprar.component';

describe('ButtonComprarComponent', () => {
  let component: ButtonComprarComponent;
  let fixture: ComponentFixture<ButtonComprarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComprarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonComprarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
