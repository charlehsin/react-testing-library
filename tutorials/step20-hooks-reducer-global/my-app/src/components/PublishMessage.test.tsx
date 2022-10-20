import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import PublishMessage from './PublishMessage';

describe('PublishMessage rendering', () => {
  test('should render the expected elements', () => {
    const dispatch = jest.fn();
    render(<PublishMessage dispatch={dispatch} />);

    // eslint-disable-next-line testing-library/no-debugging-utils
    //screen.debug();

    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    expect(screen.getByText('Got something to say?')).toBeInTheDocument();

    expect(screen.getByLabelText('messageText')).toBeInTheDocument();

    expect(screen.getByRole('button', {
      name: /Publish it/
    })).toBeInTheDocument();
  });
});

describe('PublishMessage user eventing', () => {
  test('should render the expected elements and call matching method if user types and presses enter key', () => {
    const dispatch = jest.fn();
    render(<PublishMessage dispatch={dispatch} />);

    userEvent.type(screen.getByLabelText('messageText'), 'message 1');

    expect(screen.getByDisplayValue('message 1')).toBeInTheDocument();

    userEvent.type(screen.getByLabelText('messageText'), '{enter}');

    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  test('should render the expected elements and should not call matching method if user types and presses non-enter key', () => {
    const dispatch = jest.fn();
    render(<PublishMessage dispatch={dispatch} />);

    userEvent.type(screen.getByLabelText('messageText'), 'message 1');

    expect(screen.getByDisplayValue('message 1')).toBeInTheDocument();

    userEvent.type(screen.getByLabelText('messageText'), '{esc}');

    expect(dispatch).not.toHaveBeenCalled();
  });

  test('should render the expected elements and call matching method if user types and clicks button', () => {
    const dispatch = jest.fn();
    render(<PublishMessage dispatch={dispatch} />);

    userEvent.type(screen.getByLabelText('messageText'), 'message 1');

    expect(screen.getByDisplayValue('message 1')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', {
      name: /Publish it/
    }));

    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});

