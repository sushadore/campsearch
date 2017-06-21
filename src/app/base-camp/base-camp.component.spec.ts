import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCampComponent } from './base-camp.component';

describe('BaseCampComponent', () => {
  let component: BaseCampComponent;
  let fixture: ComponentFixture<BaseCampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseCampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
