import { TestBed } from '@angular/core/testing';

import { ListBirthdayService } from './list-birthday.service';

describe('ListBirthdayService', () => {
  let service: ListBirthdayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListBirthdayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
