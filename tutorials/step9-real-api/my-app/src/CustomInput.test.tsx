import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CustomInput from './CustomInput';

describe('When the component renders ok', () => {
  test('should render the component', async () => {
    const onChange = jest.fn();
    render(
      <CustomInput value='' onChange={onChange}>
        Input:
      </CustomInput>
    );
  });

  test('should render the children passed into the component', async () => {
    const onChange = jest.fn();
    render(
      <CustomInput value='' onChange={onChange}>
        Input:
      </CustomInput>
    );
    expect(screen.getByText(/Input:/)).toBeInTheDocument();
  });
});

describe('When the user types', () => {
  test('should call the onChange callback handler by using fireEvent', () => {
    const onChange = jest.fn();
    render(
      <CustomInput value='' onChange={onChange}>
        Input:
      </CustomInput>
    );

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'David' }
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('should call the onChange callback handler by using userEvent', async () => {
    const onChange = jest.fn();
    render(
      <CustomInput value='' onChange={onChange}>
        Input:
      </CustomInput>
    );

    await userEvent.type(screen.getByRole('textbox'), 'David');
    expect(onChange).toHaveBeenCalledTimes(5);
  });
});
