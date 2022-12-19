import { Action } from "@ngrx/store";

export enum ActionTypes {
    AddUsersInfo = '[Add users info] Action',
    UpdateUsersInfo = '[Update users info] Action',
    FailureUserInfo='[Failure users info] Action',
    AddUserTodoInfoId = '[Add user todo infoID] Action',
    UpdateUserTodoInfoId = '[Update user todo infoID] Action',
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
export class FailureUsersInfoAction implements Action {
    readonly type = ActionTypes.FailureUserInfo;
    public payload: { error: any };
    constructor(payload: any) {
        this.payload = payload
    }
}

export class AddUserTodoInfoIdAction implements Action {
    readonly type = ActionTypes.AddUserTodoInfoId;
}

export class UpdateUserTodoInfoIdAction implements Action {
    readonly type = ActionTypes.UpdateUserTodoInfoId;
    public payload: { id: any };
    constructor(payload: any) {
        this.payload = payload
    }

}

export class AddUserTodoInfoAction implements Action {
    readonly type = ActionTypes.AddUserTodoInfo;
}

export class UpdateUserTodoInfoAction implements Action {
    readonly type = ActionTypes.UpdateUserTodoInfo;
    public payload: { specificUsertodoInfo: any };
    constructor(payload: any) {
        this.payload = payload
    }

}

export type todoActions =AddUsersInfoAction | UpdateUsersInfoAction |FailureUsersInfoAction | AddUserTodoInfoIdAction | UpdateUserTodoInfoIdAction |AddUserTodoInfoAction| UpdateUserTodoInfoAction |null;
