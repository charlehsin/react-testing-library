import { NEW_MESSAGE } from './types';
import reducer from './reducer';

describe('reducer', () => {
  test('should return the expected state when the action has matching type', () => {
    const state = reducer({ messages: ['message 1'] }, { type: NEW_MESSAGE, item: 'message 2' });
    expect(state.messages.length).toEqual(2);
    expect(state.messages[0]).toEqual('message 1');
    expect(state.messages[1]).toEqual('message 2');
  });

  test('should return the expected state when the action does not have matching type', () => {
    const state = reducer({ messages: ['message 1'] }, { type: 'dummy', item: 'message 2' });
    expect(state.messages.length).toEqual(1);
    expect(state.messages[0]).toEqual('message 1');
  });
});