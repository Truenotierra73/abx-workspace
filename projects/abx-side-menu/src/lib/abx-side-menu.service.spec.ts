import { TestBed } from '@angular/core/testing';

import { AbxSideMenuService } from './abx-side-menu.service';

describe('AbxSideMenuService', () => {
  let service: AbxSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbxSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
