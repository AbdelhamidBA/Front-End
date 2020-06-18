import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedFilmComponent } from './recommended-film.component';

describe('RecommendedFilmComponent', () => {
  let component: RecommendedFilmComponent;
  let fixture: ComponentFixture<RecommendedFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
