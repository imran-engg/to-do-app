import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ActionTypes, AddUsersInfoAction, UpdateUsersInfoAction } from 'src/store/todo.actions';
import { selectTodoStoreData } from 'src/store/todo.selectors';
import { UsersList } from '../models/userslist.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  usersList: any = [];
  constructor(private router: Router, private store: Store) { }

  ngOnInit(): void {

    this.store.dispatch(new AddUsersInfoAction);
    this.store.pipe(select(selectTodoStoreData)).subscribe((resp: any) => {
      this.usersList = resp?.todoStore?.usersInfo;
    })

  }
}
