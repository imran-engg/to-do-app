import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { TodoService } from "src/app/todo.service";
import { ActionTypes, FailureUsersInfoAction, UpdateUsersInfoAction, UpdateUserTodoInfoAction, UpdateUserTodoInfoIdAction } from "./todo.actions";



@Injectable()
export class TodoEffects {
    constructor(
        private actions$: Actions,
        private TodoSer: TodoService
    ) { }
    loadUsers$ = createEffect(() => this.actions$.pipe(
        ofType(ActionTypes.AddUsersInfo),
        mergeMap(() => this.TodoSer.getUsersList()
            .pipe(
                map(usersList => (new UpdateUsersInfoAction({ usersInfo: usersList }))),
                catchError(err => of(new FailureUsersInfoAction({ error: err })))
            ))
    )
    )


    loadUserToDo$ = createEffect(() => this.actions$.pipe(
        ofType(ActionTypes.UpdateUserTodoInfoId),
        mergeMap((action:UpdateUserTodoInfoIdAction) => 
        // console.log("",action);
        this.TodoSer.getUserSpecificToDo(action.payload.id)
            .pipe(
                map(usersList => (new UpdateUserTodoInfoAction({ specificUsertodoInfo: usersList }))),
                catchError(err => of(new FailureUsersInfoAction({ error: err })))
            ))
    )
    )
}