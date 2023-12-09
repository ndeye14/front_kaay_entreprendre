import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderConnecteComponent } from './header-connecte.component';

describe('HeaderConnecteComponent', () => {
  let component: HeaderConnecteComponent;
  let fixture: ComponentFixture<HeaderConnecteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderConnecteComponent]
    });
    fixture = TestBed.createComponent(HeaderConnecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
