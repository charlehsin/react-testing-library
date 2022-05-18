import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('When App renders OK', () => {
  test('should render the App component', async () => {
    render(<App />);
  });

  test('should find the default selection choice', async () => {
    render(<App />);
    screen.getByText('You chose: ford');
  });
});

describe('When the user selects', () => {
  test('should select the target radio', async () => {
    render(<App />);

    await userEvent.click(screen.getAllByRole('radio')[2]);

    screen.getByText('You chose: kia');
    expect(screen.getAllByRole('radio').length).toEqual(3);
    let inputElement = screen.getAllByRole('radio')[0] as HTMLInputElement;
    expect(inputElement.checked).toBeFalsy();
    inputElement = screen.getAllByRole('radio')[1] as HTMLInputElement;
    expect(inputElement.checked).toBeFalsy();
    inputElement = screen.getAllByRole('radio')[2] as HTMLInputElement;
    expect(inputElement.checked).toBeTruthy();
  });
});
