import { TestBed } from '@angular/core/testing';

import { AdminOrWorkerGuard } from './admin-or-worker.guard';

describe('AdminOrWorkerGuard', () => {
  let guard: AdminOrWorkerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminOrWorkerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
