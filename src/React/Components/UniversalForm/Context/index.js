import { createContext } from 'react';
export default createContext();

import { actionTypes } from './actionTypes.js';

/*---------------------------
| State Update (reducer)
---------------------------*/
export const reducer =(state, action) => {

    switch(action.type) {
        case actionTypes.UF_UPDATE_CONTROL: {
            return {
                ...action.newState
            };
        }

        default: {
            return{...state}
        }
    }
}