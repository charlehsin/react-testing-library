import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { getUser } from './get-user';

jest.mock('./get-user');
const mockedGetUser = jest.mocked(getUser, true)

describe('When App renders OK', () => {
  beforeEach(() => {
    // Some common codes, but not render.
  });

  test('should render the App component', async () => {
    render(<App />);
    await waitFor(() => expect(mockedGetUser).toHaveBeenCalled());
  });

  test('should render the children passed into CustomInput component', async () => {
    render(<App />);
    await waitFor(() => expect(mockedGetUser).toHaveBeenCalled());
    expect(screen.getByText(/Input:/)).toBeInTheDocument();
  });

  test('should not render the unexpected component', async () => {
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

  test('should not find role whatever by using queryByRole', async () => {
    render(<App />);
    await waitFor(() => expect(mockedGetUser).toHaveBeenCalled());
    expect(screen.queryByRole('whatever')).toBeNull();
  });

  test('should select the input element by its role', async () => {
    render(<App />);
    await waitFor(() => expect(mockedGetUser).toHaveBeenCalled());
    screen.getByRole('textbox');
  });

  test('should select the input element by its placeholder text', async () => {
    render(<App />);
    await waitFor(() => expect(mockedGetUser).toHaveBeenCalled());
    screen.getByPlaceholderText(/Example/);
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
    const name = 'John';
    mockedGetUser.mockImplementationOnce(() =>
      Promise.resolve({ id: '1', name })
    );
    expect(screen.queryByText(/Username:/)).toBeNull();
    render(<App />);
    expect(await screen.findByText(/Username:/)).toBeInTheDocument();
    expect(await screen.findByText(/name/)).toBeInTheDocument();
  });
});
