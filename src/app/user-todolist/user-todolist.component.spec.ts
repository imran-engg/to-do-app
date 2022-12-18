import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTodolistComponent } from './user-todolist.component';

describe('UserTodolistComponent', () => {
  let component: UserTodolistComponent;
  let fixture: ComponentFixture<UserTodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTodolistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
