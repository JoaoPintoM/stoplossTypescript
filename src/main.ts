
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

interface ThresholdUpdated {
  kind: 'ThresholdUpdated';
  threshold: number;
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

interface State {
  kind: 'State';
  acquisitionPrice: number;
  targetPrice: number;
}

interface SellPosition {
  kind: 'SellPosition';
  price: number;
}

type Event = SendMeIn | PositionAcquired | ThresholdUpdated;
type Command = RemoveFromTenSecondWindow | RemoveFromFifteenSecondWindow | MovingUp | SellPosition;

interface IBus {
  publishEvent(message: Event): Command[];
}
