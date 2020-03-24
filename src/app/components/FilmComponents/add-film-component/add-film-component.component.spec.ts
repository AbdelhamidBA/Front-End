import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFilmComponentComponent } from './add-film-component.component';

describe('AddFilmComponentComponent', () => {
  let component: AddFilmComponentComponent;
  let fixture: ComponentFixture<AddFilmComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFilmComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFilmComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
