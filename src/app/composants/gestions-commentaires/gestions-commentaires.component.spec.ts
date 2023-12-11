import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionsCommentairesComponent } from './gestions-commentaires.component';

describe('GestionsCommentairesComponent', () => {
  let component: GestionsCommentairesComponent;
  let fixture: ComponentFixture<GestionsCommentairesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionsCommentairesComponent]
    });
    fixture = TestBed.createComponent(GestionsCommentairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
