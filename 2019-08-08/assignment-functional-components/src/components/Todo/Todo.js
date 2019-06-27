import React from 'react';

const Todo = ({ id, text, onDelete }) => {
  return <div onClick={() => onDelete(id)}>{text}</div>;
};
export default Todo;
