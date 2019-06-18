import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimoninalSectionComponent } from './testimoninal-section.component';

describe('TestimoninalSectionComponent', () => {
  let component: TestimoninalSectionComponent;
  let fixture: ComponentFixture<TestimoninalSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimoninalSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimoninalSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
