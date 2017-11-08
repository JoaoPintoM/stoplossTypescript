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

describe('removefrom10 raise', () => {
  given([pa, priceRaised]).when(removeFrom10AfterRaise).expectCommand([]);
});

describe('removefrom10 fallen', () => {
  given([pa, priceFallen]).when(removeFrom10AfterRaise).expectCommand([sell]);
});

describe('removeFrom15AfterRaise', () => {
  given([pa, priceRaised])
    .when(removeFrom15AfterRaise)
    .expectCommand([movingUp]);
});

describe('removeFrom15AfterFallen', () => {
  given([pa, priceFallen])
    .when(removeFrom15AfterRaise)
    .expectCommand([]);
});
