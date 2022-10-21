import { NEW_MESSAGE } from './types';
import { newMessage } from './actions';

describe('newMessage', () => {
  test('should return the expected object', () => {
    const message = newMessage('my message');
    expect(message.type).toEqual(NEW_MESSAGE);
    expect(message.item.text).toEqual('my message');
    expect(message.item.id).toBeTruthy();
    expect(message.item.timestamp).toBeTruthy();
  });
});