import { combaineReducers } from 'redux';
import { inviteReducer } from "./invite_reducer";

const rootReducer = combaineReducers({
    invite : inviteReducer
});
export default rootReducer;