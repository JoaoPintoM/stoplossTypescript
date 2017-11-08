import { given } from './helper';
import { priceFallen, removeFrom10 } from './mock/simple';

test('toto', () => {
  expect(3).toBe(3);
});

given([pa])
  .when(priceRaised)
  .expectCommand([removeFrom10, removeFrom15]);

given([pa, priceRaised])
  .when(removeFrom10)
  .expectCommand([]);

given([pa, priceRaised])
  .when(removeFrom15)
  .expectCommand([movingUp]);

given([pa, priceRaised, priceFallen])
  .when(removeFrom10)
  .expectCommand([sell]);

// given PA  -> store price ->

//when PA -> SendMeIn 10  + sendMeIn15
// when SendMeIn10 ->  if max < current   Sell
// when SenMeIn15 -> if min > current  Moving Up
// when New Price   add to sellList  add to keepList
// when remove in10seWindow  ->  delete price from  list
// when remove in15secWindow  ->  delete price from  list
