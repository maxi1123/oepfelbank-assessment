import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldingCardComponent } from './holding-card.component';

describe('HoldingCardComponent', () => {
  let component: HoldingCardComponent;
  let fixture: ComponentFixture<HoldingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HoldingCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
