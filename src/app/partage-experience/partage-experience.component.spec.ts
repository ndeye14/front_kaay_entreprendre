import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartageExperienceComponent } from './partage-experience.component';

describe('PartageExperienceComponent', () => {
  let component: PartageExperienceComponent;
  let fixture: ComponentFixture<PartageExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartageExperienceComponent]
    });
    fixture = TestBed.createComponent(PartageExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
