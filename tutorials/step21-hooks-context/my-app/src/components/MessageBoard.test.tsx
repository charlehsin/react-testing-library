import React from 'react';
import { render, screen } from '@testing-library/react';
import Context from '../context';
import MessageBoard from './MessageBoard';
import { newMessage } from '../state/actions';

describe('PublishMessage rendering', () => {
  test('should render the expected elements', () => {
    const dispatch = jest.fn();
    render(
      <Context.Provider value={{
        state: {
          messages: [newMessage('message 1').item, newMessage('message 2').item]
        },
        dispatch
      }}>
        <MessageBoard />
      </Context.Provider>
    );

    const h4List = screen.queryAllByRole('heading', { level: 4 });
    expect(h4List.length).toEqual(2);
    expect(screen.getByText('message 1')).toBeInTheDocument();
    expect(screen.getByText('message 2')).toBeInTheDocument();
  });
});