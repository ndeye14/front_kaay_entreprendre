import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailspostComponent } from './detailspost.component';

describe('DetailspostComponent', () => {
  let component: DetailspostComponent;
  let fixture: ComponentFixture<DetailspostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailspostComponent]
    });
    fixture = TestBed.createComponent(DetailspostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
