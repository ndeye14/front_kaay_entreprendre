import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingProfilComponent } from './setting-profil.component';

describe('SettingProfilComponent', () => {
  let component: SettingProfilComponent;
  let fixture: ComponentFixture<SettingProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingProfilComponent]
    });
    fixture = TestBed.createComponent(SettingProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
