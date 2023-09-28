import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrashmetalComponent } from './thrashmetal.component';

describe('ThrashmetalComponent', () => {
  let component: ThrashmetalComponent;
  let fixture: ComponentFixture<ThrashmetalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThrashmetalComponent]
    });
    fixture = TestBed.createComponent(ThrashmetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
