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
  test('should select the target option', async () => {
    render(<App />);

    await userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getAllByRole('option')[2]);

    screen.getByText('You chose: kia');
    
    expect(screen.getAllByRole('option').length).toEqual(3);

    let optionElement = screen.getAllByRole('option')[0] as HTMLOptionElement;
    expect(optionElement.value).toEqual('honda');
    expect(optionElement.selected).toBeFalsy();
    optionElement = screen.getAllByRole('option')[1] as HTMLOptionElement;
    expect(optionElement.value).toEqual('ford');
    expect(optionElement.selected).toBeFalsy();
    optionElement = screen.getAllByRole('option')[2] as HTMLOptionElement;
    expect(optionElement.value).toEqual('kia');
    expect(optionElement.selected).toBeTruthy();
  });
});
