import { createReducer, on } from '@ngrx/store';
import { changeUserLoggedinState } from './user.actions';
export const initialState = true;
const _userReducer = createReducer(
    initialState,
    on(changeUserLoggedinState, (state) => {
        if(JSON.parse(localStorage.getItem('loginSuccess'))) {
            return true
        } else {
            return false
        }
    } ),
);

export function userReducer(state, action) {
  return _userReducer(state, action);
}
