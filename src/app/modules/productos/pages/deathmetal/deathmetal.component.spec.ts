import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathmetalComponent } from './deathmetal.component';

describe('DeathmetalComponent', () => {
  let component: DeathmetalComponent;
  let fixture: ComponentFixture<DeathmetalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeathmetalComponent]
    });
    fixture = TestBed.createComponent(DeathmetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
