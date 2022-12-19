import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AddUserTodoInfoAction, AddUserTodoInfoIdAction, UpdateUserTodoInfoAction, UpdateUserTodoInfoIdAction } from 'src/store/todo.actions';
import { selectTodoStoreData } from 'src/store/todo.selectors';
import { UserToDo } from '../models/usertodo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-user-todolist',
  templateUrl: './user-todolist.component.html',
  styleUrls: ['./user-todolist.component.scss']
})
export class UserTodolistComponent implements OnInit {
  userData: any = [];

  constructor(private Route: ActivatedRoute, private toDoSer: TodoService, private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.Route.paramMap.forEach((params: Params) => {
      const id = +params['get']('id');
      console.log("id", id);
      this.store.dispatch(new UpdateUserTodoInfoIdAction({ id: id }));
      this.toDoSer.getUserSpecificToDo(id).subscribe((resp: UserToDo[]) => {
        this.userData = resp;
        console.log("resp", resp);

      })
    })
  }
  openClicked(ruserData: any, index: number) {
    this.userData[index].completed = false;
  }
  closeClicked(userData: any, index: number) {
    this.userData[index].completed = true;
  }
  backBtn() {
    this.router.navigate(["/"]);
  }

}
