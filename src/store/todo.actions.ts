import { Action } from "@ngrx/store";

export enum ActionTypes {
    AddUsersInfo = '[Add users info] Action',
    UpdateUsersInfo = '[Update users info] Action',
    AddUserTodoInfo = '[Add user todo info] Action',
    UpdateUserTodoInfo = '[Update user todo info] Action',
}

export class AddUsersInfoAction implements Action {
    readonly type = ActionTypes.AddUsersInfo;
}

export class UpdateUsersInfoAction implements Action {
    readonly type = ActionTypes.UpdateUsersInfo;
    public payload: { usersInfo: any };
    constructor(payload: any) {
        this.payload = payload
    }
}

export class AddUserTodoInfoAction implements Action {
    readonly type = ActionTypes.AddUserTodoInfo;
    public payload: { specificUsertodoInfo: any };
    constructor(payload: any) {
        this.payload = payload
    }
}

export class UpdateUserTodoInfoAction implements Action {
    readonly type = ActionTypes.UpdateUserTodoInfo;
    public payload: { specificUsertodoInfoUpdate: any };
    constructor(payload: any) {
        this.payload = payload
    }

}

export type todoActions =AddUsersInfoAction | UpdateUsersInfoAction | AddUserTodoInfoAction | UpdateUserTodoInfoAction | null;
