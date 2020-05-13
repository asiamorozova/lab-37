import { isTired, isHyper, isEducated, isHungry } from './isSelector';

describe('selector test', () => {
  it('isTired if coffee and naps are less then 1', () => {
    const state = {
      coffee: 0,
      snack: 1,
      nap: 0,
      study: 1

    };
    const tired = isTired(state);
    expect(tired).toEqual(true);
  });

  
});
