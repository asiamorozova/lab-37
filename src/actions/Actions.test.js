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


  it('eats snack', ()=> {
    const action = eatSnack(2);
  
    expect(action).toEqual({
      type: EAT_SNACK,
      payload: {
        snack: 2
      }
    });
  });

  it('naps', ()=> {
    const action = takeNap(3);
  
    expect(action).toEqual({
      type: TAKE_NAP,
      payload: {
        nap: 3
      }
    });
  });

  it('studies', ()=> {
    const action = study(4);
  
    expect(action).toEqual({
      type: STUDY,
      payload: {
        study: 4
      }
    });
  });

});
