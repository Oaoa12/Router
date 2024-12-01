import React from 'react';
import CreateTodoField from './CreateTodoField';
import Check from './Check';
import { BsTrash } from 'react-icons/bs';
import '../styles.css';

const Todoitem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div className='todo-item'>
      <span
        className='flex items-center flex-grow'
        onClick={() => changeTodo(todo._id)}
      >
        <Check isCompleted={todo.isCompleted} />
        <button className={todo.isCompleted ? 'line-through' : ''}>
          {todo.title}
        </button>
      </span>
      
      <button onClick={() => removeTodo(todo._id)} className='trash-button'>
        <BsTrash size={22} />
      </button>
    </div>
  );
};

export default Todoitem;