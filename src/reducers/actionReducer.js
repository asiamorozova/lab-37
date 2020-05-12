import { DRINK_COFFEE, EAT_SNACK, TAKE_NAP, STUDY } from '../actions/Actions';
import reducer from '../components/reducers/BaseReducer';

const initial state = {
     coffee: 0,
     snack: 0,
     nap: 0,
     study: 0
};

export default funciton reducer(state = initialState, action) {
    switch(action.type) {
        case DRINK_COFFEE: 
        return { ...state, coffee: state.coffee + 1 }

        case EAT_SNACK: 
        return { ... state, snack: state.snack + 1 }

        case TAKE_NAP: 
        return { ... state, naps: state.naps + 1 }


    };
}