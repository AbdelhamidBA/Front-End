import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFilmComponentComponent } from './update-film-component.component';

describe('UpdateFilmComponentComponent', () => {
  let component: UpdateFilmComponentComponent;
  let fixture: ComponentFixture<UpdateFilmComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFilmComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFilmComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
