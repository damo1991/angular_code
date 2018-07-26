import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export class UserService{
    constructor(private _store : Store<any>){}

    getUserState(){
        return this._store.select('appReducer');
    }

    updateUserState(obj){
        this._store.dispatch({
            type : obj.action,
            payload : obj.payload
        })
    }
}