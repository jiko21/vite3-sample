import { afterEach, describe, expect, it } from 'vitest';
import { Card } from './Card';
import { cleanup, render, screen } from '@testing-library/react';

describe('components/Card', () => {
  afterEach(cleanup);

  it('correctly render', () => {
    const { container } = render(<Card>Test</Card>);
    expect(screen.getByText('Test')).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
