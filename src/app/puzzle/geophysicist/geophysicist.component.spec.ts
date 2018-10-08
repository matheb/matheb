import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeophysicistComponent } from './geophysicist.component';

describe('GeophisicistComponent', () => {
  let component: GeophysicistComponent;
  let fixture: ComponentFixture<GeophysicistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeophysicistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeophysicistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
