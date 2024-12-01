import React, { useState } from 'react';

const CreateTodoField = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  return (
    <div className='create-todo-field'>
      <input
        type="text"
        onChange={e => setTitle(e.target.value)}
        value={title}
        onKeyPress={e => {
          if (e.key === 'Enter' && title.trim()) {
            addTodo(title);
            setTitle('');
          }
        }}
        placeholder=" Add a task"
      />
    </div>
  );
};

export default CreateTodoField;