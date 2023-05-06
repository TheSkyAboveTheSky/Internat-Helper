import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProblemDetailsComponent } from './show-problem-details.component';

describe('ShowProblemDetailsComponent', () => {
  let component: ShowProblemDetailsComponent;
  let fixture: ComponentFixture<ShowProblemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProblemDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowProblemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
