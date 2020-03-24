import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFilmComponentComponent } from './delete-film-component.component';

describe('DeleteFilmComponentComponent', () => {
  let component: DeleteFilmComponentComponent;
  let fixture: ComponentFixture<DeleteFilmComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFilmComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFilmComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
