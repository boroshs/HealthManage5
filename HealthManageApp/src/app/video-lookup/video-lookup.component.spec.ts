import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLookupComponent } from './video-lookup.component';

describe('VideoLookupComponent', () => {
  let component: VideoLookupComponent;
  let fixture: ComponentFixture<VideoLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
