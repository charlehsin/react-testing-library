import { render, screen } from '@testing-library/react';
import App from './App';

describe('When App renders OK', () => {
  beforeEach(() => {
    // Some common codes, but not render.
  });

  test('should render the App component', () => {
    render(<App />);
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

  test('should select the input element by its role', () => {
    render(<App />);
    screen.getByRole('textbox');
  });

  test('should select the input element by its placeholder text', () => {
    render(<App />);
    screen.getByPlaceholderText(/Example/);
  });

  test('should select the label element by its text', () => {
    render(<App />);
    screen.getByLabelText(/Input:/);
  });
});
