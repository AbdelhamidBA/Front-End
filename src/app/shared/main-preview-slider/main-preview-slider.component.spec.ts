import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPreviewSliderComponent } from './main-preview-slider.component';

describe('MainPreviewSliderComponent', () => {
  let component: MainPreviewSliderComponent;
  let fixture: ComponentFixture<MainPreviewSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPreviewSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPreviewSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
