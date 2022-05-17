import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { getUser } from './get-user';

jest.mock('./get-user');
const mockedGetUser = jest.mocked(getUser, true)

describe('When App renders OK', () => {
  test('should render the App component', async () => {
    render(<App />);
    await waitFor(() => expect(mockedGetUser).toHaveBeenCalled());
  });

  test('should not render the unexpected component, checked by using getByText', async () => {
    render(<App />);
    await waitFor(() => expect(mockedGetUser).toHaveBeenCalled());
    let error = undefined;
    try {
      screen.getByText(/InvalidInput:/i);
    } catch (err) {
      error = err;
    }
    expect(error).toBeDefined();
  });

  test('should not find the unexpected role, checked by using queryByRole', async () => {
    render(<App />);
    await waitFor(() => expect(mockedGetUser).toHaveBeenCalled());
    expect(screen.queryByRole('whatever')).toBeNull();
  });

  test('should select the input element by its role textbox', async () => {
    render(<App />);
    await waitFor(() => expect(mockedGetUser).toHaveBeenCalled());
    expect(screen.getAllByRole('textbox').length).toEqual(2);
  });

  test('should select the input element by its role button', async () => {
    render(<App />);
    await waitFor(() => expect(mockedGetUser).toHaveBeenCalled());
    screen.getByRole('button');
  });

  test('should select the input element by its placeholder text', async () => {
    render(<App />);
    await waitFor(() => expect(mockedGetUser).toHaveBeenCalled());
    expect(screen.getAllByPlaceholderText(/Example/).length).toEqual(2);
  });

  test('should select the label element by its text', async () => {
    render(<App />);
    await waitFor(() => expect(mockedGetUser).toHaveBeenCalled());
    screen.getByLabelText(/Input:/);
  });


});

describe('When the component fetches the user successfully', () => {
  beforeEach(() => {
    mockedGetUser.mockClear();
  });

  test('should call getUser once', async () => {
    render(<App />);
    await waitFor(() => expect(mockedGetUser).toHaveBeenCalledTimes(1));
  });

  test('should render the user name passed', async () => {
    mockedGetUser.mockImplementationOnce(() =>
      Promise.resolve({ id: '1', name: 'John' })
    );
    expect(screen.queryByText(/Username:/)).toBeNull();
    render(<App />);
    expect(await screen.findByText(/Username:/)).toBeInTheDocument();
    expect(await screen.findByText(/John/)).toBeInTheDocument();
  });
});

describe('When the user enters some text in the input element', () => {
  test('should display the text in the screen by using fireEvent', async () => {
    render(<App />);
    await waitFor(() => expect(mockedGetUser).toHaveBeenCalled());

    expect(screen.getByText(/You typed: .../)).toBeInTheDocument();

    fireEvent.change(screen.getAllByRole('textbox')[0], {
      target: { value: 'David' }
    });

    expect(screen.getByText(/You typed: David/)).toBeInTheDocument();
  });

  test('should display the text in the screen by using userEvent', async () => {
    render(<App />);
    await waitFor(() => expect(mockedGetUser).toHaveBeenCalled());

    expect(screen.getByText(/You typed: .../)).toBeInTheDocument();

    await userEvent.type(screen.getAllByRole('textbox')[0], 'David');

    expect(screen.getByText(/You typed: David/)).toBeInTheDocument();
  });

  test('should display the text in the screen with expected style', async () => {
    render(<App />);
    await waitFor(() => expect(mockedGetUser).toHaveBeenCalled());
    expect(screen.getByText(/You typed: .../)).toHaveStyle('color: red; background-color: yellow;');
  });
});
