import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

jest.mock('./Joke', () => () => (
  <>
    <div>Joke</div>
  </>
));

jest.mock('./Tasks', () => () => (
  <>
    <div>Tasks</div>
  </>
));

jest.mock('./Gallery', () => () => (
  <>
    <div>Gallery</div>
  </>
));

beforeEach(() => {
  jest.resetAllMocks();
  jest.resetModules();
});

describe('App rendering', () => {
  test('should render the expected elements', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/Hello everyone/)).toBeInTheDocument();

    expect(screen.getByLabelText(/userQueryText/)).toBeInTheDocument();

    expect(screen.getByRole('button', {
      name: /Search/i
    })).toBeInTheDocument();

    expect(screen.getByText('Joke')).toBeInTheDocument();
    expect(screen.getByText('Tasks')).toBeInTheDocument();
    expect(screen.getByText('Gallery')).toBeInTheDocument();

    expect(screen.getByRole('button', {
      name: /Hide/i
    })).toBeInTheDocument();

    // eslint-disable-next-line testing-library/no-debugging-utils
    //screen.debug();
  });
});

describe('App user events', () => {
  test('should render the matching input value when user enters the input value', () => {
    render(<App />);

    expect(screen.queryByDisplayValue('dog')).not.toBeInTheDocument();

    userEvent.type(screen.getByLabelText(/userQueryText/), 'dog');

    expect(screen.getByDisplayValue('dog')).toBeInTheDocument();

    // eslint-disable-next-line testing-library/no-debugging-utils
    //screen.debug();
  });

  test('should call matching method when user presses Enter key at input field', () => {
    const originalOpen = window.open;
    window.open = jest.fn();

    render(<App />);

    userEvent.type(screen.getByLabelText(/userQueryText/), 'dog');
    userEvent.type(screen.getByLabelText(/userQueryText/), '{enter}')

    expect(window.open).toHaveBeenCalledWith('https://google.com/search?q=dog', '_blank');

    window.open = originalOpen;
  });

  test('should not call matching method when user presses not-Enter key at input field', () => {
    const originalOpen = window.open;
    window.open = jest.fn();

    render(<App />);

    userEvent.type(screen.getByLabelText(/userQueryText/), 'dog');
    userEvent.type(screen.getByLabelText(/userQueryText/), '{esc}')

    expect(window.open).not.toHaveBeenCalled();

    window.open = originalOpen;
  });

  test('should call matching method when user clicks the button', () => {
    const originalOpen = window.open;
    window.open = jest.fn();

    render(<App />);

    userEvent.type(screen.getByLabelText(/userQueryText/), 'cat');
    userEvent.click(screen.getByRole('button', {
      name: /Search/i
    }));

    expect(window.open).toHaveBeenCalledWith('https://google.com/search?q=cat', '_blank');

    window.open = originalOpen;
  });

  test('should not render the Gallery when user clicks hide', () => {
    render(<App />);

    expect(screen.getByText('Gallery')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', {
      name: /Hide/i
    }));

    expect(screen.queryByText('Gallery')).not.toBeInTheDocument();
  });
});