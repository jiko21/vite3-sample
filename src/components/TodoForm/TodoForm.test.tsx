import { afterEach, describe, expect, it, vi } from 'vitest';
import { TodoForm } from './TodoForm';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

describe('components/TodoForm', () => {
  afterEach(cleanup);

  it('correctly submit value with valid input', () => {
    const handleSubmitMock = vi.fn();
    render(<TodoForm handleSubmit={handleSubmitMock} />);

    fireEvent.change(screen.getByTestId('todoForm-input'), {
      target: {
        value: 'aaa',
      },
    });
    fireEvent.click(screen.getByTestId('todoForm-button'));
    expect(handleSubmitMock).toBeCalledWith('aaa');
  });

  it('correctly not submit value with empty', () => {
    const handleSubmitMock = vi.fn();
    render(<TodoForm handleSubmit={handleSubmitMock} />);

    fireEvent.change(screen.getByTestId('todoForm-input'), {
      target: {
        value: '',
      },
    });
    fireEvent.click(screen.getByTestId('todoForm-button'));
    expect(handleSubmitMock).not.toBeCalled();
  });

  it('correctly not submit value with space', () => {
    const handleSubmitMock = vi.fn();
    render(<TodoForm handleSubmit={handleSubmitMock} />);

    fireEvent.change(screen.getByTestId('todoForm-input'), {
      target: {
        value: ' ',
      },
    });
    fireEvent.click(screen.getByTestId('todoForm-button'));
    expect(handleSubmitMock).not.toBeCalled();
  });

  it('correctly not submit value with zenkaku space', () => {
    const handleSubmitMock = vi.fn();
    render(<TodoForm handleSubmit={handleSubmitMock} />);

    fireEvent.change(screen.getByTestId('todoForm-input'), {
      target: {
        value: '　',
      },
    });
    fireEvent.click(screen.getByTestId('todoForm-button'));
    expect(handleSubmitMock).not.toBeCalled();
  });

  it('correctly not submit value with tab space', () => {
    const handleSubmitMock = vi.fn();
    render(<TodoForm handleSubmit={handleSubmitMock} />);

    fireEvent.change(screen.getByTestId('todoForm-input'), {
      target: {
        value: '  ',
      },
    });
    fireEvent.click(screen.getByTestId('todoForm-button'));
    expect(handleSubmitMock).not.toBeCalled();
  });
});
