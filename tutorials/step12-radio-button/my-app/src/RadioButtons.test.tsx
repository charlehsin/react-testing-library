import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RadioButtons from './RadioButtons';

const options = [
  { label: 'Honda', value: 'honda' },
  { label: 'Ford', value: 'ford' },
  { label: 'Kia', value: 'kia' },
];

describe('When the component renders OK', () => {
  test('should render the RadioButtons component', () => {
    const mockOnChange = jest.fn();
    render(<RadioButtons label='my label' name='car' value='ford'
      options={options} onChange={mockOnChange} />);
  });

  test('should find the label text', () => {
    const mockOnChange = jest.fn();
    render(<RadioButtons label='my label' name='car' value='ford'
      options={options} onChange={mockOnChange} />);

    screen.getByLabelText(/my label/);
  });

  test('should find 3 radio roles with matching default attributes', () => {
    const mockOnChange = jest.fn();
    render(<RadioButtons label='my label' name='car' value='ford'
      options={options} onChange={mockOnChange} />);

    expect(screen.getAllByRole('radio').length).toEqual(3);

    let inputElement = screen.getAllByRole('radio')[0] as HTMLInputElement;
    expect(inputElement.name).toEqual('car');
    expect(inputElement.id).toEqual('honda');
    expect(inputElement.value).toEqual('honda');
    expect(inputElement.checked).toBeFalsy();

    inputElement = screen.getAllByRole('radio')[1] as HTMLInputElement;
    expect(inputElement.name).toEqual('car');
    expect(inputElement.id).toEqual('ford');
    expect(inputElement.value).toEqual('ford');
    expect(inputElement.checked).toBeTruthy();

    inputElement = screen.getAllByRole('radio')[2] as HTMLInputElement;
    expect(inputElement.name).toEqual('car');
    expect(inputElement.id).toEqual('kia');
    expect(inputElement.value).toEqual('kia');
    expect(inputElement.checked).toBeFalsy();
  });
});

describe('When the user selects', () => {
  test('should call onChange once', async () => {
    const mockOnChange = jest.fn();
    render(<RadioButtons label='my label' name='car' value='ford'
      options={options} onChange={mockOnChange} />);

    await userEvent.click(screen.getAllByRole('radio')[2]);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
