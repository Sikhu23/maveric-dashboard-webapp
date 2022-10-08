import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeadetailsComponent } from './ideadetails.component';

describe('IdeadetailsComponent', () => {
  let component: IdeadetailsComponent;
  let fixture: ComponentFixture<IdeadetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeadetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
