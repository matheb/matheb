import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDeveloperComponent } from './ui-developer.component';

describe('UiDeveloperComponent', () => {
  let component: UiDeveloperComponent;
  let fixture: ComponentFixture<UiDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
