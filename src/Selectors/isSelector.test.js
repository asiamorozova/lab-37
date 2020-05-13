import { isTired, isHyper, isEducated, isHungry } from './isSelector';

describe('selector test', () => {
  it('isTired if coffee and naps are less then 1', () => {
    const state = {
      coffees: 0,
      snacks: 1,
      naps: 0,
      studies: 1

    };
    const tired = isTired(state);
    expect(tired).toEqual(true);
  });

  
});
