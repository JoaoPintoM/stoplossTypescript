export const state: State = {
  kind: 'State',
  acquisitionPrice: 1,
  targetPrice: 0.9,
};

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

export const removeFrom10: RemoveFromTenSecondWindow = {
  kind: 'RemoveFromTenSecondWindow',
};

export const removeFrom15: RemoveFromFifteenSecondWindow = {
  kind: 'RemoveFromFifteenSecondWindow',
};

export const sell: SellPosition = {
  kind: 'SellPosition',
  price: 0.5,
};
