import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnisComponent } from './unis.component';

describe('UnisComponent', () => {
  let component: UnisComponent;
  let fixture: ComponentFixture<UnisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnisComponent]
    });
    fixture = TestBed.createComponent(UnisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
