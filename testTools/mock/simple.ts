
export const pa: PositionAcquired = {
  kind: 'PositionAcquired',
  price: 1,
};

export const priceRaised: PriceUpdated = {
  kind: 'PriceUpdated',
  price: 1.5,
};

export const priceFallen: PriceUpdated = {
  kind: 'PriceUpdated',
  price: 0.5,
};

export const removeFrom10AfterRaise: RemoveFromTenSecondWindow = {
  kind: 'RemoveFromTenSecondWindow',
  price: 1.5,
};

export const removeFrom15AfterRaise: RemoveFromFifteenSecondWindow = {
  kind: 'RemoveFromFifteenSecondWindow',
  price: 1.5,
};

export const removeFrom10AfterFallen: RemoveFromTenSecondWindow = {
  kind: 'RemoveFromTenSecondWindow',
  price: 0.5,
};

export const removeFrom15AfterFallen: RemoveFromFifteenSecondWindow = {
  kind: 'RemoveFromFifteenSecondWindow',
  price: 0.5,
};

export const sell: SellPosition = {
  kind: 'SellPosition',
  price: 0.5,
};

export const movingUp: MovingUp = {
  kind: 'MovingUp',
  price: 1.5,
};
