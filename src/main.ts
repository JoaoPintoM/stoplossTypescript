
interface PositionAcquired {
  kind: 'PositionAcquired';
  price: number;
}

interface PriceUpdated {
  kind: 'PriceUpdated';
  price: number;
}

interface MovingUp {
  kind: 'MovingUp';
  targetPrice: number;
  timestamp: number;
}

interface SendMeIn {
  kind: 'SendMeIn';
  second: number;
}

interface RemoveFromTenSecondWindow {
  kind: 'RemoveFromTenSecondWindow';
  price: number;
}

interface RemoveFromFifteenSecondWindow {
  kind: 'RemoveFromFifteenSecondWindow';
  price: number;
}

type Event = SendMeIn | MovingUp | PositionAcquired;
type Command = RemoveFromTenSecondWindow | RemoveFromFifteenSecondWindow;

interface IBus {
  publish(message: Event);
}
