import { NEW_MESSAGE } from './types';
import { v4 as uuidv4 } from 'uuid';

export const newMessage = (text: string) => ({
  type: NEW_MESSAGE,
  item: { id: uuidv4(), text, timestamp: Date.now(), }
});