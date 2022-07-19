import { css } from '@emotion/react';
import React, { ButtonHTMLAttributes } from 'react';

export type ButtonStyle = 'primary' | 'danger';
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonStyle?: ButtonStyle;
  disabled?: boolean;
  testId?: string;
};

const baseStyle = css`
  border: none;
  border-radius: 4px;
  font-weight: 700;
  height: 32px;
  line-height: 16px;
  min-width: 60px;
  padding: 8px 4px;
  position: relative;
  :active {
    top: 1px;
  }
`;

const primaryStyle = css`
  background-color: #00c1cf;
  color: white;
  :hover {
    background-color: #5ec9d1;
    color: white;
  }
`;

const dangerStyle = css`
  background-color: #ff002b;
  color: white;
  :hover {
    background-color: #ff3b3b;
    color: white;
  }
`;

const disabledStyle = css`
  background-color: #dfdfdf;
  color: #3c3c3c;
  :active {
    top: 0;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  buttonStyle = 'primary',
  disabled = false,
  children,
  testId,
  onClick,
  ...props
}) => {
  const style = disabled ? disabledStyle : buttonStyle === 'danger' ? dangerStyle : primaryStyle;
  return (
    <button
      data-testid={`${testId}-button`}
      css={[baseStyle, style]}
      onClick={(e) => {
        if (!disabled && onClick) onClick(e);
      }}
      {...props}
    >
      {children}
    </button>
  );
};
