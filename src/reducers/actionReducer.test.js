import { drinkCoffee, eatSnack, takeNap, study } from '../actions/Actions';
import reducer from './actionReducer';

describe('it handles reducer functionality', () => {
  it('handles drink coffee', () => {
    const state = {
      coffee: 0,
      snack: 0,
      nap: 0,
      study: 0
    };

    const action = drinkCoffee();
    const newState = reducer(state, action);

    expect (newState).toEqual({
      coffee: 1,
      snack: 0,
      nap: 0,
      study: 0
    });
  });

  it('it snack', () => {
    const state = {
      coffee: 1,
      snack: 0,
      nap: 0,
      study: 0
    };

    const action = eatSnack();
    const newState = reducer(state, action);

    expect (newState).toEqual({
      coffee: 1,
      snack: 1,
      nap: 0,
      study: 0
    });
  });

  it('naps', () => {
    const state = {
      coffee: 0,
      snack: 0,
      nap: 0,
      study: 0
    };

    const action = takeNap();
    const newState = reducer(state, action);

    expect (newState).toEqual({
      coffee: 0,
      snack: 0,
      nap: 1,
      study: 0
    });
  });



  it('study', () => {
    const state = {
      coffee: 0,
      snack: 0,
      nap: 0,
      study: 0
    };

    const action = study();
    const newState = reducer(state, action);

    expect (newState).toEqual({
      coffee: 0,
      snack: 0,
      nap: 0,
      study: 1
    });
  });
});
