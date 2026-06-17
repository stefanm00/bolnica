import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacijentDialog } from './pacijent-dialog';

describe('PacijentDialog', () => {
  let component: PacijentDialog;
  let fixture: ComponentFixture<PacijentDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacijentDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(PacijentDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
