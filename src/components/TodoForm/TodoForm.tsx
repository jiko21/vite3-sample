import React, { useMemo, useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';

type Props = {
  handleSubmit: (text: string) => void;
};

export const TodoForm: React.FC<Props> = ({ handleSubmit }) => {
  const [text, setText] = useState('');
  const disabled = useMemo(() => text.length === 0, [text]);
  const EMPTY_PATTERN = /^[\s|  |	]+$/

  const onSubmit = () => {
    if (!EMPTY_PATTERN.test(text) || text.length > 0) {
      handleSubmit(text);
      setText('');
    }
  };

  return (
    <div>
      <Input type="text" value={text} onChange={(e) => setText(e.target.value)} testId="todoForm" />
      <Button onClick={onSubmit} disabled={disabled} testId="todoForm">
        ADD
      </Button>
    </div>
  );
};
