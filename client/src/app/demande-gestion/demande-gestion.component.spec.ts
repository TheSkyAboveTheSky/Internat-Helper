import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeGestionComponent } from './demande-gestion.component';

describe('DemandeGestionComponent', () => {
  let component: DemandeGestionComponent;
  let fixture: ComponentFixture<DemandeGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeGestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
