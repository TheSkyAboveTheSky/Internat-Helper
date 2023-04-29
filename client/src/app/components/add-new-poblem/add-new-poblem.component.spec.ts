import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPoblemComponent } from './add-new-poblem.component';

describe('AddNewPoblemComponent', () => {
  let component: AddNewPoblemComponent;
  let fixture: ComponentFixture<AddNewPoblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewPoblemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewPoblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
