import { afterEach, describe, expect, it, vi } from 'vitest';
import { Todo } from './Todo';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';


describe('components/Todo', () => {
  afterEach(cleanup);

  it('correctly render', () => {
    const component = render(<Todo />);
    expect(component.container).toMatchSnapshot();
  });

  it('correctly add task', async () => {
    const component = render(<Todo />);
    const input = await screen.getByTestId('todoForm-input');
    fireEvent.change(input, {
      target: {
        value: 'test',
      },
    });
    const button = await screen.getByTestId('todoForm-button');
    fireEvent.click(button);
    expect(screen.getByText('test')).toBeTruthy();
    expect(component.container).toMatchSnapshot();
  });

  it('correctly not add task when input is empty', async () => {
    const component = render(<Todo />);
    const button = await screen.getByTestId('todoForm-button');
    fireEvent.click(button);
    expect(await screen.queryByText('remove')).toBeFalsy();
    expect(component.container).toMatchSnapshot();
  });

  it('correctly remove task', async () => {
    const component = render(<Todo />);
    const input = await screen.getByTestId('todoForm-input');
    const button = await screen.getByTestId('todoForm-button');
    fireEvent.change(input, {
      target: {
        value: 'test1',
      },
    });
    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: 'test2',
      },
    });
    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: 'test3',
      },
    });
    fireEvent.click(button);
    const removeButton = await screen.getByTestId('todo-remove-1-button');
    fireEvent.click(removeButton);
    expect(component.container).toMatchSnapshot();
    expect(await screen.queryByText('test1')).toBeTruthy();
    expect(await screen.queryByText('test2')).toBeFalsy();
    expect(await screen.queryByText('test3')).toBeTruthy();
  });

});
