

export const DRINK_COFFEE = 'DRINK_COFFEE';
export const drinkCoffee = coffee => ({
  type: DRINK_COFFEE,
  payload: { coffee }
});

export const EAT_SNACK = 'EAT_SNACK';
export const eatSnack = snack => ({ 
  type: EAT_SNACK,
  payload: { snack }
});

export const TAKE_NAP = 'TAKE_NAP';
export const takeNap = nap => ({
  type: TAKE_NAP,
  payload: { nap }
});

export const STUDY = 'STUDY';
export const study = study => ({
  type: STUDY,
  payload: { study }
});
