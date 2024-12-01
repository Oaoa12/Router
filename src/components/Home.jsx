import React, { useState } from 'react';
import Todoitem from './Todoitem';
import CreateTodoField from './CreateTodoField'; 
import styles from '../styles.css';

const data = [
  {
    _id: 'wefw23',
    title: "Finish the assignment collaboration",
    isCompleted: false,
  },
  {
    _id: 'wefw23123',
    title: "Read next chapter of the book",
    isCompleted: false,
  },
  {
    _id: 'wefw232354',
    title: "Send the finished assignment",
    isCompleted: false,
  },
];

const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find(t => t._id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(t => t._id !== id));
  };

  const addTodo = title => {
    setTodos([
      ...todos,
      {
        _id: new Date(),
        title,
        isCompleted: false
      },
    ]);
  };

  return (
    <div className='checklist-container'>
      <h1 className='todo-title'>TODO</h1>
      <CreateTodoField addTodo={addTodo} />
      {todos.map(todo => (
        <Todoitem 
          key={todo._id} 
          todo={todo} 
          changeTodo={changeTodo} 
          removeTodo={removeTodo} 
        />
      ))}
    </div>
  );
};

export default Home;