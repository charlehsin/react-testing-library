import { render, screen } from '@testing-library/react';
import App from './App';

describe('When App renders OK', () => {
  test('should render the App component', () => {
    render(<App />);
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });

  test('should render the children passed into CustomInput component', () => {
    render(<App />);
    expect(screen.getByText(/Input:/)).toBeInTheDocument();
  });

  test('should not render the unexpected component', () => {
    render(<App />);
    let error = undefined;
    try {
      screen.getByText(/InvalidInput:/i);
    } catch (err) {
      error = err;
    }
    expect(error).toBeDefined();
  });
 });
