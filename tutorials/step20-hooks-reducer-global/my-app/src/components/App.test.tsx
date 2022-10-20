import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./PublishMessage', () => () => (
  <>
    <div>PublishMessage</div>
  </>
));

jest.mock('./MessageBoard', () => () => (
  <>
    <div>MessageBoard</div>
  </>
));

describe('App rendering', () => {
  test('should render the expected elements', () => {
    render(<App />);

    // eslint-disable-next-line testing-library/no-debugging-utils
    //screen.debug();

    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    expect(screen.getByText('Reaction')).toBeInTheDocument();
    expect(screen.getByText('PublishMessage')).toBeInTheDocument();
    expect(screen.getByText('MessageBoard')).toBeInTheDocument();
  });
});