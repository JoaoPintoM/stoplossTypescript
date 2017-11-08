import { given } from '../testTools/helper';
import {
  pa,
  movingUp,
  removeFrom10AfterRaise,
  removeFrom15AfterRaise,
  priceFallen,
  removeFrom10AfterRaise,
  priceRaised,
  sell, removeFrom15AfterFallen,
} from '../testTools/mock/simple';

describe('priceUpdated', () => {
  given([pa])
    .when(priceRaised)
    .expectCommand([removeFrom10AfterRaise, removeFrom15AfterRaise]);
});

describe('removefrom10', () => {
  given([pa, priceRaised]).when(removeFrom10AfterRaise).expectCommand([]);
});

describe('removeFrom15AfterRaise', () => {
  given([pa, priceRaised])
    .when(removeFrom15AfterRaise)
    .expectCommand([movingUp]);
});

describe('removeFrom15AfterFallen', () => {
  given([pa, priceRaised, priceFallen])
    .when(removeFrom15AfterFallen)
    .expectCommand([sell]);
});
