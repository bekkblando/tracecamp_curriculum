import React from 'react';
import TodosContext from 'context/TodosContext/TodosContext';

const App = () => {
  const [todo, setTodo] = React.useState('');
  const [todoList, setTodoList] = React.useState('');
  const [selectedList, setSelectedList] = React.useState();

  const {
    state: todoLists,
    addList,
    removeList,
    addListItem,
    removeListItem,
  } = React.useContext(TodosContext);

  return (
    <div>
      <label htmlFor="todo-list">Todo List: </label>
      <input
        id="todo-list"
        type="text"
        value={todoList}
        onChange={event => setTodoList(event.target.value)}
      />
      <button onClick={() => addList(todoList)}>Add List</button>
      <br />
      {selectedList}

      {todoLists.length ? (
        <div>
          <label htmlFor="todo">Todo: </label>
          <input
            id="todo"
            type="text"
            value={todo}
            onChange={event => setTodo(event.target.value)}
          />
          <select
            onChange={event => {
              setSelectedList(event.target.value);
            }}
            value={selectedList === todoList.id}
          >
            {todoLists.map(todoList => (
              <option key={todoList.id} value={todoList.id}>
                {todoList.name}
              </option>
            ))}
          </select>
          <button onClick={() => addListItem(Number(selectedList), todo)}>
            Add Todo
          </button>
          <br />
        </div>
      ) : null}
      {todoLists.map(todoList => (
        <div key={todoList.id}>
          <div key={todoList.id} onClick={() => removeList(todoList.id)}>
            {todoList.name}
          </div>
          <div>
            {todoList.todoItems.map(todoItem => (
              <div
                key={todoItem.id}
                onClick={() => removeListItem(todoList.id, todoItem.id)}
              >
                {todoItem.text}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;

/* <React.Fragment>
  <button onClick={addList}>Add List</button>
  <button onClick={() => addListItem(state[0].id)}>Add Todo</button>
  <button onClick={() => clearList(state[0].id)}>Clear List</button>
  {state.map(todoList => (
    <div key={todoList.id}>
      {console.log(todoList)}
      <div
        key={todoList.id}
        onClick={() => {
          removeList(todoList.id);
        }}
      >
        {todoList.name}
      </div>
      {todoList.todoItems.map(todoItem => (
        <div
          key={todoItem.id}
          onClick={() => removeListItem(todoList.id, todoItem.id)}
        >
          {todoItem.text}
        </div>
      ))}
    </div>
  ))}
  {<pre>{JSON.stringify(state, null, 2)}</pre>}
</React.Fragment> */
