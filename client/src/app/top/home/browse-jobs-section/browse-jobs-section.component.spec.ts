import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseJobsSectionComponent } from './browse-jobs-section.component';

describe('BrowseJobsSectionComponent', () => {
  let component: BrowseJobsSectionComponent;
  let fixture: ComponentFixture<BrowseJobsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseJobsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseJobsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
