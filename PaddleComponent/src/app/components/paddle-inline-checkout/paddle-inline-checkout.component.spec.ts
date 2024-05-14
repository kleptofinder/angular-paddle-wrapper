import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaddleInlineCheckoutComponent } from './paddle-inline-checkout.component';

describe('PaddleInlineCheckoutComponent', () => {
  let component: PaddleInlineCheckoutComponent;
  let fixture: ComponentFixture<PaddleInlineCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaddleInlineCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaddleInlineCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
