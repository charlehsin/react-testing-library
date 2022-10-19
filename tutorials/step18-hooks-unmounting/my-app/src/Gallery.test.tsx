import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Gallery from './Gallery';
import * as hook from './hook';

beforeEach(() => {
  jest.resetAllMocks();
  jest.resetModules();
});

describe('Gallery rendering', () => {
  test('should render the expected elements', () => {
    const spyUseDynamicTransition = jest.spyOn(hook, 'useDynamicTransition');
    spyUseDynamicTransition.mockImplementationOnce(() => 1);

    render(<Gallery />);

    // eslint-disable-next-line testing-library/no-debugging-utils
    //screen.debug();

    expect(screen.getByText('label 2')).toBeInTheDocument();
    expect(screen.getByText(/Gallery transition delay/)).toBeInTheDocument();
    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
    expect(screen.getByDisplayValue('3')).toBeInTheDocument();

    spyUseDynamicTransition.mockRestore();
  });
});

describe('Gallery user eventing', () => {
  test('should render the expected elements when user types the valid number', () => {
    const spyUseDynamicTransition = jest.spyOn(hook, 'useDynamicTransition');
    spyUseDynamicTransition.mockImplementation(() => 1);

    render(<Gallery />);

    // Initial input value
    expect(screen.getByDisplayValue('3')).toBeInTheDocument();

    userEvent.type(screen.getByRole('spinbutton'), '2');

    spyUseDynamicTransition.mockRestore();
  });

  test('should render the expected elements when user types the invalid number', () => {
    const spyUseDynamicTransition = jest.spyOn(hook, 'useDynamicTransition');
    spyUseDynamicTransition.mockImplementation(() => 1);

    render(<Gallery />);

    // Initial input value
    expect(screen.getByDisplayValue('3')).toBeInTheDocument();

    userEvent.type(screen.getByRole('spinbutton'), '-1');

    spyUseDynamicTransition.mockRestore();
  });
});