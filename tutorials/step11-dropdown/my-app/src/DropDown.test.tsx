import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DropDown from './DropDown';

const options = [
  { label: 'Honda', value: 'honda' },
  { label: 'Ford', value: 'ford' },
  { label: 'Kia', value: 'kia' },
];

describe('When component renders OK', () => {
  test('should render the DropDown component', () => {
    const onChange = jest.fn();
    render(<DropDown
      label='My Label'
      value='ford'
      options={options}
      onChange={onChange}
    />);
  });

  test('should find the target label by text', () => {
    const onChange = jest.fn();
    render(<DropDown
      label='My Label'
      value='ford'
      options={options}
      onChange={onChange}
    />);
    screen.getByLabelText('My Label');
  });

  test('should find the combobox role', () => {
    const onChange = jest.fn();
    render(<DropDown
      label='My Label'
      value='ford'
      options={options}
      onChange={onChange}
    />);
    screen.getByRole('combobox');
  });

  test('should find 3 option roles with matching default attributes', () => {
    const onChange = jest.fn();
    render(<DropDown
      label='My Label'
      value='ford'
      options={options}
      onChange={onChange}
    />);
    expect(screen.getAllByRole('option').length).toEqual(3);
    let optionElement = screen.getAllByRole('option')[0] as HTMLOptionElement;
    expect(optionElement.value).toEqual('honda');
    expect(optionElement.selected).toBeFalsy();
    optionElement = screen.getAllByRole('option')[1] as HTMLOptionElement;
    expect(optionElement.value).toEqual('ford');
    expect(optionElement.selected).toBeTruthy();
    optionElement = screen.getAllByRole('option')[2] as HTMLOptionElement;
    expect(optionElement.value).toEqual('kia');
    expect(optionElement.selected).toBeFalsy();
  });
});

describe('When the user selects', () => {
  test('should select the target option', async () => {
    const mockOnChange = jest.fn();
    render(<DropDown
      label='My Label'
      value='ford'
      options={options}
      onChange={mockOnChange}
    />);

    await userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getAllByRole('option')[2]);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
