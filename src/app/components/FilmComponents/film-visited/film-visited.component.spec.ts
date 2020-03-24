import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmVisitedComponent } from './film-visited.component';

describe('FilmVisitedComponent', () => {
  let component: FilmVisitedComponent;
  let fixture: ComponentFixture<FilmVisitedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmVisitedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmVisitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
