import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('When App renders OK', () => {
  test('should render the App component', async () => {
    render(<App />);
  });

  test('should find the default choice', async () => {
    render(<App />);
    screen.getByText('You ate?: true');
    let inputElement = screen.getByRole('checkbox') as HTMLInputElement;
    expect(inputElement.checked).toBeTruthy();
  });
});

describe('When the user checks', () => {
  test('should toggle the checkbox', async () => {
    render(<App />);

    await userEvent.click(screen.getByRole('checkbox'));

    screen.getByText('You ate?: false');
    let inputElement = screen.getByRole('checkbox') as HTMLInputElement;
    expect(inputElement.checked).toBeFalsy();

    await userEvent.click(screen.getByRole('checkbox'));

    screen.getByText('You ate?: true');
    inputElement = screen.getByRole('checkbox') as HTMLInputElement;
    expect(inputElement.checked).toBeTruthy();
  });
});
