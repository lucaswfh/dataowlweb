import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UncheckedComponent } from './unchecked.component';

describe('LandingComponent', () => {
  let component: UncheckedComponent;
  let fixture: ComponentFixture<UncheckedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UncheckedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UncheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
