import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UpdateUsersInfoAction } from 'src/store/todo.actions';
import { UsersList } from '../models/userslist.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  usersList: any = [];
  constructor(private toDoSer: TodoService, private router: Router, private store: Store) { }

  ngOnInit(): void {
    this.toDoSer.getUsersList().subscribe((resp: Array<UsersList>) => {
      this.store.dispatch(new UpdateUsersInfoAction({ usersInfo: resp }));
      console.log("resp from users", resp);
      this.usersList = resp;
      console.log(" this.usersList from users", this.usersList);
    });
  }
}
