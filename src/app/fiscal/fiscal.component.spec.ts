import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiscalComponent } from './fiscal.component';

describe('autorComponent', () => {
  let component: FiscalComponent;
  let fixture: ComponentFixture<FiscalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiscalComponent],
    });
    fixture = TestBed.createComponent(FiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
