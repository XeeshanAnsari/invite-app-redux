import ActionTypes from '../constants/action_types';

export function inviteReducer(state = {}, action) {
  switch(action.type) {
      
      case ActionTypes.AddToInviteFulfilled: {
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Added guest.'
      });
      // newState.guests = newState.guests || [];
      // newState.guests = newState.guests.slice();
      // newState.guests.push(action.guest);
      return newState;
    }
    case ActionTypes.GuestAdded: {
      const newState = Object.assign({}, state);
      newState.guests = newState.guests || [];
      newState.guests = newState.guests.slice();
      newState.guests.push(action.guest);
      return newState;
    }
     default:
      return state;
 
  }
}
