import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmInfoComponentComponent } from './film-info-component.component';

describe('FilmInfoComponentComponent', () => {
  let component: FilmInfoComponentComponent;
  let fixture: ComponentFixture<FilmInfoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmInfoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
