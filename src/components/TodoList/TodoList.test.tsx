import { afterEach, describe, expect, it, vi } from 'vitest';
import { TodoList } from './TodoList';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

const todos = [
  {
    id: 1,
    content: 'aaa',
  },
  {
    id: 2,
    content: 'bbb',
  },
];

describe('components/TodoList', () => {
  afterEach(cleanup);

  it('correctly render', () => {
    const onRemoveMock = vi.fn();
    const { container } = render(<TodoList testId="todoList" onRemove={onRemoveMock} todos={todos} />);
    expect(container).toMatchSnapshot();
  });

  it('correctly call remove', () => {
    const onRemoveMock = vi.fn();
    const { container } = render(<TodoList testId="todoList" onRemove={onRemoveMock} todos={todos} />);
    fireEvent.click(screen.getByTestId('todoList-remove-2-button'));
    expect(onRemoveMock).toBeCalledWith(2);
  });
});
