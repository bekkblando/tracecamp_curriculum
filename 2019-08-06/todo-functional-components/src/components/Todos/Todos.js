import React from 'react';
import ObjectId from 'bson-objectid';

import Todo from 'components/Todo/Todo';

const Todos = () => {
  const [todo, setTodo] = React.useState('');
  const [todos, setTodos] = React.useState([]);

  const onDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onAdd = () => {
    if (todo) {
      const id = ObjectId().toHexString();
      setTodos([
        ...todos,
        {
          text: todo,
          id: id,
        },
      ]);
      setTodo('');
    }
  };

  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Add todo…"
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
      <button type="button" onClick={onAdd}>
        Add
      </button>
      {todos.map(({ id, text }) => (
        <Todo
          key={id}
          id={id}
          text={text}
          onDelete={onDelete}
        />
      ))}
    </React.Fragment>
  );
};
export default Todos;
