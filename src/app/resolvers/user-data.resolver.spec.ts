import { TestBed } from '@angular/core/testing';

import { UserDataResolver } from './user-data.resolver';

describe('UserDataResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserDataResolver = TestBed.get(UserDataResolver);
    expect(service).toBeTruthy();
  });
});
