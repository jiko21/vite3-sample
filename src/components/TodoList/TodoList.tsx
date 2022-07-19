import styled from '@emotion/styled';
import { Todo } from '../../todo';
import { Card } from '../Card';
import { Button } from '../Button';

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;

const Li = styled.li`
  margin: 4px 0;
`;

const CardContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Span = styled.span`
  color: #3c3c3c;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

type Props = {
  todos: Todo[];
  onRemove: (id: number) => void;
  testId?: string;
};

export const TodoList: React.FC<Props> = ({ todos, onRemove, testId }) => {
  return (
    <Ul>
      {todos.map((todo) => (
        <Li key={todo.id}>
          <Card>
            <CardContainer>
              <Span>{todo.content}</Span>
              <Button
                onClick={() => onRemove(todo.id)}
                buttonStyle="danger"
                testId={`${testId}-remove-${todo.id}`}
              >
                remove
              </Button>
            </CardContainer>
          </Card>
        </Li>
      ))}
    </Ul>
  );
};
