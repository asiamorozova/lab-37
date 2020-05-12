import { drinkCoffee, eatSnack, takeNap, study } from '../actions/Actions';
import reducer from './actionReducer';

describe('it handles reducer functionality', () => {
    it('handles drink coffee' , () => {
        const state = {
            coffee: 0,
            snack: 0,
            nap: 0,
            study: 0
        };
        const action = drinkCoffee();
        const (newState).toEqual({
            coffee: 1,
            snack: 0,
            nap: 0,
            study: 0
        });
    });


it('handles drink coffee' , () => {
        const state = {
            coffee: 0,
            snack: 0,
            nap: 0,
            study: 0
        };
        const action = drinkCoffee();
        const (newState).toEqual({
            coffee: 1,
            snack: 0,
            nap: 0,
            study: 0
        });
    });


})