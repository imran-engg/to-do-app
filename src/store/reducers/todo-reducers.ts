import { todoActions, ActionTypes } from "../todo.actions";

export class TodoStore {
    usersInfo: any;
    id: any;
    specificUsertodoInfo: any

    constructor(userInfo: any, id: any, specificUsertodoInfo: any) {
        this.usersInfo = userInfo;
        this.id = id;
        this.specificUsertodoInfo = specificUsertodoInfo;
    }
}

export const initialState: any = {
    todoStore: new TodoStore({}, {}, {})
}

export function todoReducers(state = initialState, action: todoActions = null) {
    switch (action?.type) {
        case ActionTypes.UpdateUsersInfo:
            return { ...state, todoStore: { ...state.todoStore, usersInfo: action.payload.usersInfo } };

        case ActionTypes.UpdateUserTodoInfoId:
            return { ...state, todoStore: { ...state.todoStore, id: action.payload.id } };

        case ActionTypes.UpdateUserTodoInfo:
            return { ...state, todoStore: { ...state.todoStore, specificUsertodoInfo: action.payload.specificUsertodoInfo} };
    }

}