import { ADD_USER, REMOVE_USER, ADD_TOKEN, REMOVE_TOKEN } from '../actions/actions';
import { Login } from '../../data/login';
import { UserData } from '../../data/userdata';

export const initialState : UserData = {
    id : 1,
    name : 'Pruthwi'
}

export const initialLoginState : Login = {
    loginoken : null
}

export function reducer(state = initialState,action) : UserData{
    switch(action.type){
        case ADD_USER : {
            return {
                ...state,
                id : action.payload.id,
                name : action.payload.name
            }
        }
        case REMOVE_USER : {
            return{
                ...state,
                id : null,
                name : null
            }
        }
    }
}

export function loginReducer(state = initialLoginState, action) : Login {
    switch(action.type){
        case ADD_TOKEN : {
            return {
                ...state,
                loginoken : action.payload
            }
        }
        case REMOVE_TOKEN : {
            return {
                ...state,
                loginoken : null
            }
        }
    }
}