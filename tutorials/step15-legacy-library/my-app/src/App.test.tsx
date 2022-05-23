import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import * as FileSaver from './FileSaver';

jest.mock('./FileSaver');
const mockedFileSaver = jest.mocked(FileSaver, true)

describe('When App renders OK', () => {
  test('should render the App component', async () => {
    render(<App />);
  });

  test('should render the button', async () => {
    render(<App />);

    screen.getByRole('button');
    screen.getByText('Save file');
  });
});

describe('When the user clicks the button', () => {
  beforeEach(() => {
    mockedFileSaver.mockClear();
  });

  test('should call the file save method', async () => {
    mockedFileSaver.mockImplementationOnce(() =>
      ({ saveAs: jest.fn() })
    );

    render(<App />);

    await userEvent.click(screen.getByRole('button'));

    expect(FileSaver.saveAs).toHaveBeenCalledWith(
      expect.anything(),
      'mytest.txt');
  });
});
