import { TestBed } from '@angular/core/testing';

import { GraphColorService } from './graph-color.service';

describe('GraphColorService', () => {
  let service: GraphColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
