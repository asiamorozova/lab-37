import { DRINK_COFFEE } from '../actions/Actions';

export default function reducer(state = [], action) {
  switch(action.type) {
    case DRINK_COFFEE: 
      return [...state, action.payload];
    default: 
      return state;
  }
}
