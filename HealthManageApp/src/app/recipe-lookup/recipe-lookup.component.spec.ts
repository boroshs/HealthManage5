import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeLookupComponent } from './recipe-lookup.component';

describe('RecipeLookupComponent', () => {
  let component: RecipeLookupComponent;
  let fixture: ComponentFixture<RecipeLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
