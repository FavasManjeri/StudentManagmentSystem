import { TestBed } from '@angular/core/testing';

import { StudentmanagmentService } from './studentmanagment.service';

describe('StudentmanagmentService', () => {
  let service: StudentmanagmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentmanagmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
