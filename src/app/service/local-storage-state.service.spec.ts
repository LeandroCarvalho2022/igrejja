import { TestBed } from '@angular/core/testing';

import { LocalStorageStateService } from './local-storage-state.service';

describe('LocalStorageStateService', () => {
  let service: LocalStorageStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
