import { drinkCoffee } from '../actions/Actions';
import reducer from './coffeeReducer';

describe('coffee reducer', () => {
  it('handles the DRINK_COFFEE action', () => {
    const state = [];
    const action = drinkCoffee(1);

    const newState = reducer(state, action);

    expect(newState).toEqual([{ coffee: 1 }]);
  });
});
