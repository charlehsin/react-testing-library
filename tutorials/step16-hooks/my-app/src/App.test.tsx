import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
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

    userEvent.type(screen.getByRole('textbox'), 'dog');

    expect(screen.getByDisplayValue('dog')).toBeInTheDocument();

    // eslint-disable-next-line testing-library/no-debugging-utils
    //screen.debug();
  });

  test('should call matching method when user presses Enter key at input field', async () => {
    const originalOpen = window.open;
    window.open = jest.fn();

    render(<App />);

    userEvent.type(screen.getByRole('textbox'), 'dog');
    userEvent.type(screen.getByRole('textbox'), '{enter}')

    expect(window.open).toHaveBeenCalledWith('https://google.com/search?q=dog', '_blank');

    window.open = originalOpen;
  });

  test('should not call matching method when user presses not-Enter key at input field', async () => {
    const originalOpen = window.open;
    window.open = jest.fn();

    render(<App />);

    userEvent.type(screen.getByRole('textbox'), 'dog');
    userEvent.type(screen.getByRole('textbox'), '{esc}')

    expect(window.open).not.toHaveBeenCalled();

    window.open = originalOpen;
  });

  test('should call matching method when user clicks the button', async () => {
    const originalOpen = window.open;
    window.open = jest.fn();

    render(<App />);

    userEvent.type(screen.getByRole('textbox'), 'cat');
    userEvent.click(screen.getByRole('button', {
      name: /Search/i
    }));

    expect(window.open).toHaveBeenCalledWith('https://google.com/search?q=cat', '_blank');

    window.open = originalOpen;
  });
});