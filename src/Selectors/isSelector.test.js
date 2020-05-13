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
  it('is not tired if coffee and naps are greater then 1', () => {
    const state = {
      coffees:2, 
      snacks: 0,
      naps: 2,
      studies:0,
    };
    const tired = isTired(state);
    expect(tired).toEqual(false);
  });
  it('isHyper if coffee > 3', () => {
    const state = {
      coffees: 4,
      snacks: 0,
      naps: 0,
      studies: 0
    };
    const hyper = isHyper(state);
    expect(hyper).toEqual(true);

  });
  it('not hyper if coffee less then 3', () => {
    const state = {
      coffees: 1,
      snacks: 0,
      naps: 0,
      studies: 1
    };
    const hyper = isHyper(state);
    expect(hyper).toEqual(false);
  });

  it('head explodes if educated is > 2', () => {
    const state = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 3
    };
    const educated = isEducated(state);
    expect(educated).toEqual(true);
  });
  it('head is fine if studying is < 2', () => {
    const state = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 1
    };
    const educated = isEducated(state);
    expect(educated).toEqual(false);
  });
  it('isHungry is true if <1', () => {
    const state = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    };
    const hungry = isHungry(state);
    expect(hungry).toEqual(true);
  });

});
