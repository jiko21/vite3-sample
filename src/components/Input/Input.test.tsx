import { afterEach, describe, expect, it, vi } from 'vitest';
import { Input } from './Input';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

describe('components/Input', () => {
  afterEach(cleanup);

  it('correctly render', () => {
    const { container } = render(<Input />);
    expect(container).toMatchSnapshot();
  });

  it('correctly fire event', () => {
    const onChangeMock = vi.fn();
    render(<Input onChange={onChangeMock} testId="test" />);
    fireEvent.change(screen.getByTestId('test-input'), {
      target: {
        value: 'aaa',
      }
    });

    expect(onChangeMock).toBeCalled();
  });
});
