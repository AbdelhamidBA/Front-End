import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilmComponentComponent } from './list-film-component.component';

describe('ListFilmComponentComponent', () => {
  let component: ListFilmComponentComponent;
  let fixture: ComponentFixture<ListFilmComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFilmComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFilmComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
