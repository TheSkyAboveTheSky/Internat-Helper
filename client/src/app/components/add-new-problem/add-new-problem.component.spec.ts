import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewProblemComponent } from './add-new-problem.component';

describe('AddNewProblemComponent', () => {
  let component: AddNewProblemComponent;
  let fixture: ComponentFixture<AddNewProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewProblemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
