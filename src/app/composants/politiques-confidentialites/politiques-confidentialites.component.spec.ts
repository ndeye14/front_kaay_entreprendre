import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitiquesConfidentialitesComponent } from './politiques-confidentialites.component';

describe('PolitiquesConfidentialitesComponent', () => {
  let component: PolitiquesConfidentialitesComponent;
  let fixture: ComponentFixture<PolitiquesConfidentialitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolitiquesConfidentialitesComponent]
    });
    fixture = TestBed.createComponent(PolitiquesConfidentialitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
