import { render, screen } from '@testing-library/react';
import Pokemon from './Pokemon';
import userEvent from '@testing-library/user-event';
import { runFetch } from './fetch-service';

jest.mock('./fetch-service');
const mockedRunFetch = jest.mocked(runFetch, true)

describe('When the user enters a valid pokemon name', () => {
  beforeEach(() => {
    mockedRunFetch.mockClear();
  });

  test('should show the pokemon abilities of that pokemon', async () => {
    const abilities = [
      {
        ability: {
          name: 'Test ability 1',
          url: 'https://ability.com/ability1',
        },
      },
      {
        ability: {
          name: 'Test ability 2',
          url: 'https://ability.com/ability2',
        },
      },
    ];

    mockedRunFetch.mockResolvedValue({ abilities });

    render(<Pokemon />);
    await userEvent.type(screen.getByRole('textbox'), 'ditto');
    await userEvent.click(screen.getByRole('button'));
    const returnedAbilities = await screen.findAllByRole('listitem');
    expect(returnedAbilities).toHaveLength(2);
  });
});

describe('When the user enters an invalid pokemon name', () => {
  test('should show an error message in the screen', async () => {
    mockedRunFetch.mockRejectedValueOnce(new Error());

    render(<Pokemon />);
    await userEvent.type(screen.getByRole('textbox'), 'invalid-pokemon-name');
    await userEvent.click(screen.getByRole('button'));
    const message = await screen.findByText(/Something went wrong/);
    expect(message).toBeInTheDocument();
  });
});
