import { TestBed } from '@angular/core/testing';

import { PlayHomeVideoService } from './play-home-video.service';

describe('PlayHomeVideoService', () => {
  let service: PlayHomeVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayHomeVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
