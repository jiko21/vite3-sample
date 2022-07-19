import { css } from '@emotion/react';
import React, { forwardRef, InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  testId?: string;
};

const style = css`
  box-sizing: border-box;
  border: solid 1px #cccccc;
  border-radius: 4px;
  line-height: 16px;
  padding: 8px 4px;
  height: 32px;
`;

export const Input = forwardRef<HTMLInputElement, Props>(({ testId, ...props }, ref) => (
  <input {...props} css={style} ref={ref} data-testid={`${testId}-input`} />
));
