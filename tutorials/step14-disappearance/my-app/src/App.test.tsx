import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('When App renders OK', () => {
  test('should render the App component', async () => {
    render(<App />);
  });

  test('should render the default choice for the checkbox', async () => {
    render(<App />);

    screen.getByLabelText('Show text?');
    let inputElement = screen.getByRole('checkbox') as HTMLInputElement;
    expect(inputElement.checked).toBeTruthy();
    screen.getByText('How are you?');
  });

  test('should render the button', async () => {
    render(<App />);

    screen.getByRole('button');
    screen.getByText('Toggle the 2nd text to show or hide after some delay');
    expect(screen.queryByText('How are you again?')).not.toBeInTheDocument();
  });
});

describe('When the user checks the checkbox', () => {
  test('should toggle the checkbox and render the text accordingly', async () => {
    render(<App />);

    await userEvent.click(screen.getByRole('checkbox'));

    // Since we use "await" above, at this point, the new view is already rendered.

    let inputElement = screen.getByRole('checkbox') as HTMLInputElement;
    expect(inputElement.checked).toBeFalsy();

    // Check disappearance
    expect(screen.queryByText('How are you?')).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('checkbox'));

    // Since we use "await" above, at this point, the new view is already rendered

    inputElement = screen.getByRole('checkbox') as HTMLInputElement;
    expect(inputElement.checked).toBeTruthy();

    // Check appearance
    screen.getByText('How are you?');
  });
});

describe('When the user clicks the button', () => {
  test('should render the 2nd text accordingly', async () => {
    render(<App />);

    await userEvent.click(screen.getByRole('button'));

    // Since we wait for the user click to be done, the 2nd text is not finished yet since there is some extra delay.
    // Therefore, we need to use "await and findBy" below.

    // Check appearance
    await screen.findByText('How are you again?');

    await userEvent.click(screen.getByRole('button'));

    // Since we wait for the user click to be done, the 2nd text is not finished yet since there is some extra delay.
    // Therefore, we need to use "await and waitForElementToBeRemoved" below.

    // Check disappearance
    await waitForElementToBeRemoved(() => screen.queryByText('How are you again?'))
  });
});
