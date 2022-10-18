import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { v4 as uuidv4 } from 'uuid';
import Tasks from './Tasks';

beforeAll(() => {
  global.Storage.prototype.setItem = jest.fn((key, value) => { });
})

afterAll(() => {
  (global.Storage.prototype.setItem as any).mockReset();
  (global.Storage.prototype.getItem as any).mockReset();
});

describe('Tasks rendering', () => {
  test('should render the expected elements when there is no data in storage', async () => {
    global.Storage.prototype.getItem = jest.fn((key) => null);

    render(<Tasks />);

    // eslint-disable-next-line testing-library/no-debugging-utils
    //screen.debug();

    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    expect(screen.getByText(/Tasks/)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByLabelText(/taskName/)).toBeInTheDocument();
    expect(screen.getByRole('button', {
      name: /Add Task/
    })).toBeInTheDocument();
    expect(global.Storage.prototype.getItem).toHaveBeenCalled();
  });

  test('should render the expected elements when there is data in storage', async () => {
    global.Storage.prototype.getItem = jest.fn().mockReturnValue(JSON.stringify({
      tasks: [{ taskText: 'new task 1', id: uuidv4() }],
      completedTasks: [{ taskText: 'completed task 1', id: uuidv4() }]
    }));

    render(<Tasks />);

    // eslint-disable-next-line testing-library/no-debugging-utils
    //screen.debug();

    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    expect(screen.getByText(/Tasks/)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByLabelText(/taskName/)).toBeInTheDocument();
    expect(screen.getByRole('button', {
      name: /Add Task/
    })).toBeInTheDocument();
    expect(screen.getByText(/new task 1/)).toBeInTheDocument();
    expect(screen.getByText(/completed task 1/)).toBeInTheDocument();
    expect(screen.getByText(/x/)).toBeInTheDocument();
    expect(global.Storage.prototype.getItem).toHaveBeenCalled();
  });
});

describe('Tasks user event', () => {
  test('should render the expected element when user enters the task and clicks add button', async () => {
    global.Storage.prototype.getItem = jest.fn((key) => null);

    render(<Tasks />);

    userEvent.type(screen.getByRole('textbox'), 'my task 1');

    expect(await screen.findByDisplayValue('my task 1')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', {
      name: /Add Task/
    }));

    // Check that there is an entry in task list, but not completed task list.
    expect(await screen.findByText(/my task 1/)).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText(/x/)).not.toBeInTheDocument()
    });

    // eslint-disable-next-line testing-library/no-debugging-utils
    //screen.debug();

    expect(global.Storage.prototype.getItem).toHaveBeenCalled();
    expect(global.Storage.prototype.setItem).toHaveBeenCalled();
  });

  test('should render the expected element when user completes a task', async () => {
    global.Storage.prototype.getItem = jest.fn((key) => null);

    render(<Tasks />);

    userEvent.type(screen.getByRole('textbox'), 'my task 1');

    expect(await screen.findByDisplayValue('my task 1')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', {
      name: /Add Task/
    }));

    expect(await screen.findByText(/my task 1/)).toBeInTheDocument();

    userEvent.click(screen.getByText(/my task 1/));

    // Check that there is an entry in completed task list.
    expect(await screen.findByText(/x/)).toBeInTheDocument();

    // eslint-disable-next-line testing-library/no-debugging-utils
    //screen.debug();

    expect(global.Storage.prototype.getItem).toHaveBeenCalled();
    expect(global.Storage.prototype.setItem).toHaveBeenCalled();
  });

  test('should render the expected element when user deletes a task', async () => {
    global.Storage.prototype.getItem = jest.fn((key) => null);

    render(<Tasks />);

    userEvent.type(screen.getByRole('textbox'), 'my task 1');

    expect(await screen.findByDisplayValue('my task 1')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', {
      name: /Add Task/
    }));

    expect(await screen.findByText(/my task 1/)).toBeInTheDocument();

    userEvent.click(screen.getByText(/my task 1/));

    // Check that there is an entry in completed task list.
    expect(await screen.findByText(/x/)).toBeInTheDocument();

    userEvent.click(screen.getByText(/x/));

    // Check that there is no entry in task list and no entry in completed task list.
    await waitFor(() => {
      expect(screen.queryByText(/my task 1/)).not.toBeInTheDocument()
    });
    await waitFor(() => {
      expect(screen.queryByText(/x/)).not.toBeInTheDocument()
    });

    // eslint-disable-next-line testing-library/no-debugging-utils
    //screen.debug();

    expect(global.Storage.prototype.getItem).toHaveBeenCalled();
    expect(global.Storage.prototype.setItem).toHaveBeenCalled();
  });
});