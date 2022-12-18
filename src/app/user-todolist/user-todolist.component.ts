import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AddUserTodoInfoAction, UpdateUserTodoInfoAction } from 'src/store/todo.actions';
import { UserToDo } from '../models/usertodo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-user-todolist',
  templateUrl: './user-todolist.component.html',
  styleUrls: ['./user-todolist.component.scss']
})
export class UserTodolistComponent implements OnInit {
  userData: any = [];

  constructor(private Route: ActivatedRoute, private toDoSer: TodoService, private store: Store, private router:Router) { }

  ngOnInit(): void {
    this.Route.paramMap.forEach((params: Params) => {
      const id = +params['get']('id');
      console.log("id", id);
      this.toDoSer.getUserSpecificToDo(id).subscribe((resp: UserToDo[]) => {
        this.userData = resp;
        //  this.store.dispatch(new AddUserTodoInfoAction({ specificUsertodoInfo: resp }));
        console.log("resp", resp);
        
      })
    })
  }
  openClicked(ruserData: any, index: number) {
    console.log(this.userData[index]);
    this.userData[index].completed = false;
    // this.store.dispatch(new UpdateUserTodoInfoAction({ specificUsertodoInfoUpdate: this.userData }));
    alert(index);
  }
  closeClicked(userData: any, index: number) {
    alert(index);
    this.userData[index].completed = true;
    
    // this.store.dispatch(new UpdateUserTodoInfoAction({ specificUsertodoInfoUpdate: this.userData }));
  }

  backBtn(){
    this.router.navigate(["/"]);
  }

}
