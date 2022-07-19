import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Todo as TodoType } from '../../todo';
import { TodoForm } from '../TodoForm';
import { TodoList } from '../TodoList';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20%;
`;

const Container = styled.div`
  width: 100%;
`;

const h2Style = css`
  color: #3c3c3c;
`;

export const Todo: React.VFC = () => {
  const [lists, setList] = useState<TodoType[]>([]);
  const [id, setId] = useState(0);

  const increment = () => {
    setId((state) => state + 1);
  };

  const handleSubmit = (text: string) => {
    setList((state) => [
      ...state,
      {
        id,
        content: text,
      },
    ]);
    increment();
  };

  const removeItem = (id: number) => {
    setList((state) => state.filter((item) => item.id !== id));
  };

  return (
    <Wrapper>
      <h2 css={h2Style}>Todo app</h2>
      <TodoForm handleSubmit={handleSubmit} />
      <Container>
        <TodoList todos={lists} onRemove={removeItem} testId="todo" />
      </Container>
    </Wrapper>
  );
};
