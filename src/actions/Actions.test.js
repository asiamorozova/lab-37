import { drinkCoffee, DRINK_COFFEE, eatSnack, EAT_SNACK, takeNap, TAKE_NAP, study, STUDY } from './Actions';


describe ('emoji response', () => {
  it('drinks coffee', ()=> {
    const action = drinkCoffee(1);

    expect(action).toEqual({
      type: DRINK_COFFEE,
      payload: {
        coffee: 1
      }
    });
  });
});
