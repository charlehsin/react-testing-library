import React from 'react';
import { render, screen } from '@testing-library/react';
import Joke from './Joke';

const unmockedFetch = global.fetch;

afterAll(() => {
  global.fetch = unmockedFetch
});

describe('Joke rendering', () => {
  test('should render the expected elements', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve({ setup: "my setup", punchline: "my punchline" })
      }),
    ) as jest.Mock;

    render(<Joke />);

    // eslint-disable-next-line testing-library/no-debugging-utils
    //screen.debug();

    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    expect(screen.getByText(/Joke of the session/)).toBeInTheDocument();

    // Wait for retch to finish and test again.
    expect(await screen.findByText(/my setup/)).toBeInTheDocument();
    expect(await screen.findByText(/my punchline/)).toBeInTheDocument();

  });
});