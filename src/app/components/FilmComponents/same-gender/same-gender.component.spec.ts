import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SameGenderComponent } from './same-gender.component';

describe('SameGenderComponent', () => {
  let component: SameGenderComponent;
  let fixture: ComponentFixture<SameGenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SameGenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SameGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
