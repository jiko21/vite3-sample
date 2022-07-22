import React, { useMemo, useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';

type Props = {
  handleSubmit: (text: string) => void;
};

export const TodoForm: React.FC<Props> = ({ handleSubmit }) => {
  const [text, setText] = useState('');
  const EMPTY_PATTERN = /^[\s|  |	]+$/
  const disabled = useMemo(() => EMPTY_PATTERN.test(text) || !(text.length > 0), [EMPTY_PATTERN, text]);

  const onSubmit = () => {
    if (!EMPTY_PATTERN.test(text) && text.length > 0) {
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
