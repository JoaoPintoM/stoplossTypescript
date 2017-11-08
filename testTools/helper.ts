import { max, min } from 'lodash';
import { curry, isArray } from 'lodash/fp';
import { Event } from '../src/main';

export const when = curry((bus: Ibus, event: Event) => {
  const cb = () => bus.publishEvent(event);

  return {
    expectCommand: (commandList: Command[]) => {
      const events: Command[] = cb();
      it('should equal expected', () => {
        expect(events).toEqual(expect.arrayContaining(commandList));
      });
    },
  };
});

const removePrice = (list: number[], price: number): number[] => {
  const index = list.indexOf(price);
  if (index > -1) {
    return list.splice(index, 1);
  }

  return list;
};

export function given(events: Event[]): IBus {
  const fakeBus = new FakeBus();
  //fakeBus.clear();

  return {
    when: when(fakeBus),
  };
}

export class FakeBus implements IBus {
  private isSold = false;
  private targetPrice: number;
  private sellList: number[];
  private keepList: number[];

  constructor(price: number) {
    this.targetPrice = price;
    this.sellList = [];
    this.keepList = [];
  }

  doWeSell(price: number): boolean {
    return max(this.sellList) < price;
  }

  movingUpPrice(price: number): number {
    return min(this.keepList) > price;
  }

  publishEvent(message: Event): Command[] {
    switch (message.kind) {
      case 'PriceUpdated':
        this.sellList.push(message.price);
        this.keepList.push(message.price);

        return [
          { kind: 'RemoveFromFifteenSecondWindow', price: message.price },
          { kind: 'RemoveFromTenSecondWindow', price: message.price},
        ];
      case 'RemoveFromTenSecondWindow':
        if (this.sold) {
          return [];
        }
        removePrice(this.sellList, message.price);
        if (this.doWeSell(message.price)) {
          this.isSold = true;

          return [{ kind: 'SellPosition' }];
        }

        return [];
      case 'RemoveFromFifteenSecondWindow':
        removePrice(this.keepList, message.price);
        const movingUpPrice: number = this.movingUpPrice(message.price);
        if (movingUpPrice > this.targetPrice) {
          return [{ kind: 'MovingUp', price: movingUpPrice }];
        }

        return [];
      default:
        return [];
    }
  }

  clear() {
    this.isSold = false;
    this.sellList = [];
    this.keepList = [];
  }
}
