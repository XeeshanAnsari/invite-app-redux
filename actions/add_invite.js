import ActionTypes from '../constants/action_types';
import database from './database';

export function addToInvite(name) {
    return dispatch => {
        dispatch(addToInviteRequestAction());

        const guestsRef = database.ref('/guests');
        guestsRef.push ({
            name
        })
        
        .then(() => {
            dispatch(addToInviteFulfilledAction({ name }));
        })
        .catch((error) =>{
            dispatch(addToInviteInviteRejectedAction());
        })
    }
}


function addToInviteRequestAction() {
  return {
    type: ActionTypes.AddToInviteRequested
  };
}

function addToInviteInviteRejectedAction() {
  return {
    type: ActionTypes.AddToInviteRejected
  };
}

function addToInviteFulfilledAction(guests){
    return {
        type: ActionType.AddToInviteFulfilled,
        guests
    };
}