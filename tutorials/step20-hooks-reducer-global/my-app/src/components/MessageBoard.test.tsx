import React from 'react';
import { render, screen } from '@testing-library/react';
import MessageBoard from './MessageBoard';
import { newMessage } from '../state/actions';

describe('PublishMessage rendering', () => {
  test('should render the expected elements', () => {
    render(<MessageBoard messages={[newMessage('message 1').item, newMessage('message 2').item]} />);

    const h4List = screen.queryAllByRole('heading', { level: 4 });
    expect(h4List.length).toEqual(2);
    expect(screen.getByText('message 1')).toBeInTheDocument();
    expect(screen.getByText('message 2')).toBeInTheDocument();
  });
});