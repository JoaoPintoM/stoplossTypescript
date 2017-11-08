import { given } from './helper';
import { pa, removeFrom10, removeFrom15, priceFallen, removeFrom10, priceRaised, sell } from './mock/simple';

describe('priceUpdated', () => {
  given([pa])
    .when(priceRaised)
    .expectCommand([removeFrom10, removeFrom15]);
});

describe('removefrom10', () => {
  given([pa, priceRaised])
    .when(removeFrom10)
    .expectCommand([]);
});

describe('removeFrom15', () => {
  given([pa, priceRaised])
    .when(removeFrom15)
    .expectCommand([movingUp]);
});

describe('removeFrom10', () => {
  given([pa, priceRaised, priceFallen])
    .when(removeFrom10)
    .expectCommand([sell]);
});
