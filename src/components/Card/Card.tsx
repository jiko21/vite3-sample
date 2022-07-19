import { css } from '@emotion/react';
import React from 'react';

const style = css`
  background-color: #eeeeee;
  border-radius: 4px;
  padding: 8px;
`;

export type CardProps = {
  children: React.ReactNode
}

export const Card: React.FC<CardProps> = ({ children }) => <div css={style}>{children}</div>;
