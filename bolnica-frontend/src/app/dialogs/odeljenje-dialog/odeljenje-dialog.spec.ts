import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdeljenjeDialog } from './odeljenje-dialog';

describe('OdeljenjeDialog', () => {
  let component: OdeljenjeDialog;
  let fixture: ComponentFixture<OdeljenjeDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OdeljenjeDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(OdeljenjeDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
