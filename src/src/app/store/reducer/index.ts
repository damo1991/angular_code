import { reducer, loginReducer } from './appReducer';
import { ActionReducerMap } from '@ngrx/store';

import { UserData } from '../../data/userdata';
import { Login } from '../../data/login';

interface AppStore{
    appReducer : UserData,
    loginReducer : Login
}

export const reducers : ActionReducerMap<AppStore> = {
    appReducer : reducer,
    loginReducer : loginReducer
}