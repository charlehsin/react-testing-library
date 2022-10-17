import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

jest.mock('./Joke', () => () => (
  <>
    <div>Joke</div>
  </>
));

describe('App rendering', () => {
  test('should render the expected elements', async () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/Hello everyone/)).toBeInTheDocument();

    expect(screen.getByRole('textbox')).toBeInTheDocument();

    expect(screen.getByRole('button', {
      name: /Search/i
    })).toBeInTheDocument();

    expect(screen.getByText(/Joke/)).toBeInTheDocument();

    // eslint-disable-next-line testing-library/no-debugging-utils
    //screen.debug();
  });
});

describe('App user events', () => {
  test('should render the matching input value when user enters the input value', async () => {
    render(<App />);

    expect(screen.queryByDisplayValue('dog')).not.toBeInTheDocument();

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'dog' }
    });

    expect(screen.getByDisplayValue('dog')).toBeInTheDocument();

    // eslint-disable-next-line testing-library/no-debugging-utils
    //screen.debug();
  });
});