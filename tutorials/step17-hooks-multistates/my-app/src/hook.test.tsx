import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import { useFetch } from './hook';

const unmockedFetch = global.fetch;
let container: any = null;

function TestComponent() {
  const result = useFetch('api/test', { test: 200 });

  return (
    <div>
      {result.test}
    </div>
  );
}

afterAll(() => {
  global.fetch = unmockedFetch
});

beforeEach(() => {
  // set up a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  if (container) {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
  }
});

describe('useFetch', () => {
  test('should return the expected object', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve({ test: 100 })
      }),
    ) as jest.Mock;

    render(<TestComponent />);

    // eslint-disable-next-line testing-library/no-debugging-utils
    //screen.debug();

    // Test the init value.
    expect(screen.getByText(/200/)).toBeInTheDocument();

    // Wait for retch to finish and test again.
    expect(await screen.findByText(/100/)).toBeInTheDocument();

  });
});