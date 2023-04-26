import { TestBed } from '@angular/core/testing';

import { EditProfilService } from './edit_profil.service';

describe('EditProfilService', () => {
  let service: EditProfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditProfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
