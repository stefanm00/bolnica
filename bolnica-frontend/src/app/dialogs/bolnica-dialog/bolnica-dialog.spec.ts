import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolnicaDialog } from './bolnica-dialog';

describe('BolnicaDialog', () => {
  let component: BolnicaDialog;
  let fixture: ComponentFixture<BolnicaDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BolnicaDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(BolnicaDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
