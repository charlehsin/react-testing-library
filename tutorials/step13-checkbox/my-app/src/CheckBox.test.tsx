import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CheckBox from './CheckBox';

describe('When the component renders OK', () => {
  test('should render the CheckBox component with default checked', () => {
    const mockOnChange = jest.fn();
    render(<CheckBox label='my label' checked={true}
      onChange={mockOnChange} />);

    let inputElement = screen.getByRole('checkbox') as HTMLInputElement;
    expect(inputElement.checked).toBeTruthy();
  });

  test('should render the CheckBox component with default not-checked', () => {
    const mockOnChange = jest.fn();
    render(<CheckBox label='my label' checked={false}
      onChange={mockOnChange} />);

    let inputElement = screen.getByRole('checkbox') as HTMLInputElement;
    expect(inputElement.checked).toBeFalsy();
  });

  test('should find the label', () => {
    const mockOnChange = jest.fn();
    render(<CheckBox label='my label' checked={false}
      onChange={mockOnChange} />);

    screen.getByLabelText(/my label/);
  });
});

describe('When the user checks', () => {
  test('should call onChange once', async () => {
    const mockOnChange = jest.fn();
    render(<CheckBox label='my label' checked={true}
      onChange={mockOnChange} />);

    await userEvent.click(screen.getByRole('checkbox'));

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
