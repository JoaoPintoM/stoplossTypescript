import { curry, isArray } from 'lodash/fp';

export const when = curry((state: State, command: Command) => {
  const cb = () => decide(command, state);
  return {
    expectEvents: (eventList: Event[]) => {
      const events: Event[] = cb();
      it('should equal expected', () => {
        expect(events).toEqual(eventList);
      });
    },
    expectError: (expectedError?: any) => {
      it('should throw an error', () => {
        expect(cb).toThrowError(expectedError);
      });
    },
  };
});

export function given(Event[]) {
  let pastEvents: Event[];
  if (!isArray(e)) {
    pastEvents = [e];
  } else {
    pastEvents = e;
  }
  const state: State = pastEvents.reduce(evolve, initPollState);
  return {
    when: when(state),
  };
}
