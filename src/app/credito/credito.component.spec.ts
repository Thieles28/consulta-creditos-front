import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoComponent } from './credito.component';

describe('autorComponent', () => {
  let component: CreditoComponent;
  let fixture: ComponentFixture<CreditoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditoComponent],
    });
    fixture = TestBed.createComponent(CreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
