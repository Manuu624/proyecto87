import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavymetalComponent } from './heavymetal.component';

describe('HeavymetalComponent', () => {
  let component: HeavymetalComponent;
  let fixture: ComponentFixture<HeavymetalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeavymetalComponent]
    });
    fixture = TestBed.createComponent(HeavymetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
