import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DijagnozaDialog } from './dijagnoza-dialog';

describe('DijagnozaDialog', () => {
  let component: DijagnozaDialog;
  let fixture: ComponentFixture<DijagnozaDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DijagnozaDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(DijagnozaDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
