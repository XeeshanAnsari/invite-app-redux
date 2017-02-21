import { combaineReducers } from 'redux';
import { inviteReducer } from "./invite-reducer";

const rootReducer = combaineReducers({
    invite : inviteReducer
});
export default rootReducer;