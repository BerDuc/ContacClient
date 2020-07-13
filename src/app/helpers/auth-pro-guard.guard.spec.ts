import { TestBed } from '@angular/core/testing';

import { AuthProGuardGuard } from './auth-pro-guard.guard';

describe('AuthProGuardGuard', () => {
  let guard: AuthProGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthProGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
