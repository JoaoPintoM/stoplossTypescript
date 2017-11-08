import { curry, isArray } from 'lodash/fp';

export const when = curry((bus: Ibus, event: Event) => {
  const cb = () => bus.publish(event);

  return {
    expectCommand: (commandList: Command[]) => {
      const events: Command[] = cb();
      it('should equal expected', () => {
        expect(events).toEqual(commandList);
      });
    },
  };
});

export function given(events: Event[]): IBus {
  const fakeBus = new FakeBus();
  fakeBus.clear();

  return {
    when: when(fakeBus),
  };
}

export class FakeBus implements IBus {
  private acquisitionPrice: number;
  private sellList: number[];
  private keepList: number[];

  constructor(price: number) {
    this.acquisitionPrice = price;
  }

  publishEvent(message: Event): Command[] {
    switch (message.kind) {
      case 'PriceUpdated':
        this.sellList.push(message.price);
        this.keepList.push(message.price);

        return [
          { kind: 'RemoveFromFifteenSecondWindow' },
          { kind: 'RemoveFromTenSecondWindow' },
        ];
      default:
        return [];
    }
  }

  clear() {
    this.sellList = [];
    this.keepList = [];
  }
}
