import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { Observable } from 'rxjs';
import { UsersList } from './models/userslist.model';
import { UserToDo } from './models/usertodo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {}


    getUsersList(): Observable<Array<UsersList>> {
      const url = "https://jsonplaceholder.typicode.com/users";
      return this.http.get<Array<UsersList>>(url);
    }

    getUserSpecificToDo(id:number): Observable<Array<UserToDo>>{
      const url="https://jsonplaceholder.typicode.com/users/"+id+"/todos";
      return this.http.get<Array<UserToDo>>(url);
    }
  
}


