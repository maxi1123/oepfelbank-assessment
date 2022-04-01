import { TestBed } from '@angular/core/testing';

import { SharedRenderService } from './shared-render.service';

describe('SharedRenderService', () => {
  let service: SharedRenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedRenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
