import { todoActions, ActionTypes } from "../todo.actions";

export class TodoStore {
    usersInfo: any;
    usertodoInfo: any;
    specificUsertodoInfo: any
    specificUsertodoInfoUpdate: any

    constructor(userInfo: any, usertodoInfo: any, specificUsertodoInfoUpdate: any, specificUsertodoInfo: any) {
        this.usersInfo = userInfo;
        this.usertodoInfo = usertodoInfo;
        this.specificUsertodoInfo = specificUsertodoInfo;
        this.specificUsertodoInfoUpdate = specificUsertodoInfoUpdate
    }
}

export const initialState: any = {
    todoStore: new TodoStore({}, {}, {}, {})
}

export function todoReducers(state = initialState, action: todoActions = null) {
    switch (action?.type) {
        case ActionTypes.UpdateUsersInfo:
            return { ...state, todoStore: { ...state.todoStore, usersInfo: action.payload.usersInfo } };

        case ActionTypes.AddUserTodoInfo:
            return { ...state, todoStore: { ...state.todoStore, specificUsertodoInfo: action.payload.specificUsertodoInfo } };

        case ActionTypes.UpdateUserTodoInfo:
            return { ...state, todoStore: { ...state.todoStore, specificUsertodoInfoUpdate: action.payload.specificUsertodoInfoUpdate } };
    }

}