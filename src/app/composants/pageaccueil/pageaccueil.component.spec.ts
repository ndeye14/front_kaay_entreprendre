import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageaccueilComponent } from './pageaccueil.component';

describe('PageaccueilComponent', () => {
  let component: PageaccueilComponent;
  let fixture: ComponentFixture<PageaccueilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageaccueilComponent]
    });
    fixture = TestBed.createComponent(PageaccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
