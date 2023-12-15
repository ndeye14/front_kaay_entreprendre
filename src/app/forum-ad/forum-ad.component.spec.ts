import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumAdComponent } from './forum-ad.component';

describe('ForumAdComponent', () => {
  let component: ForumAdComponent;
  let fixture: ComponentFixture<ForumAdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForumAdComponent]
    });
    fixture = TestBed.createComponent(ForumAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
