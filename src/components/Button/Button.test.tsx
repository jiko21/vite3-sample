import { afterEach, describe, expect, it, vi } from 'vitest';
import { Button } from './Button';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

describe('components/Button', () => {
  afterEach(cleanup);

  it('correctly render', () => {
    const { container } = render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it('correctly fire event', () => {
    const onClickMock = vi.fn();
    render(<Button onClick={onClickMock}>Test</Button>);
    fireEvent.click(screen.getByText('Test'));
    expect(onClickMock).toBeCalled();
  });
});
