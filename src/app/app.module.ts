import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserTodolistComponent } from './user-todolist/user-todolist.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { todoReducers } from 'src/store/reducers/todo-reducers';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from 'src/store/todo.effects';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserTodolistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
    }),
    EffectsModule.forRoot([TodoEffects]),
    StoreModule.forFeature('todo_store', todoReducers),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
      autoPause: true, //Pause recording action and stage changes when the extension window is not open
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
