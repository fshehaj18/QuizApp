import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashbaoardComponent } from './user-dashbaoard.component';

describe('UserDashbaoardComponent', () => {
  let component: UserDashbaoardComponent;
  let fixture: ComponentFixture<UserDashbaoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashbaoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashbaoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
