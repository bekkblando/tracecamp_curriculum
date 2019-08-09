import React from 'react';
import TodosContext from 'context/TodosContext/TodosContext';

const App = () => {
  const { state, dispatch } = React.useContext(TodosContext);

  const onAddList = () => {
    dispatch({
      type: 'ADD_LIST',
      payload: {
        id: Math.random(),
        name: 'My First List',
        todoItems: [],
      },
    });
  };

  const onRemoveList = id => {
    dispatch({
      type: 'REMOVE_LIST',
      payload: {
        id,
      },
    });
  };

  const onAddListItem = listId => {
    dispatch({
      type: 'ADD_TODO',
      payload: {
        listId,
        todo: {
          text: 'Random Text',
          id: Math.random(),
        },
      },
    });
  };

  const onRemoveListItem = (listId, todoId) => {
    dispatch({
      type: 'REMOVE_TODO',
      payload: {
        listId,
        todoId,
      },
    });
  };

  const onClearList = id => {
    dispatch({
      type: 'CLEAR_LIST',
      payload: {
        id,
      },
    });
  };

  return (
    <React.Fragment>
      <button onClick={onAddList}>Add List</button>
      <button onClick={() => onAddListItem(state[0].id)}>Add Todo</button>
      <button onClick={() => onClearList(state[0].id)}>Clear List</button>
      {state.map(todoList => (
        <div key={todoList.id}>
          {console.log(todoList)}
          <div
            key={todoList.id}
            onClick={() => {
              onRemoveList(todoList.id);
            }}
          >
            {todoList.name}
          </div>
          {todoList.todoItems.map(todoItem => (
            <div
              key={todoItem.id}
              onClick={() => onRemoveListItem(todoList.id, todoItem.id)}
            >
              {todoItem.text}
            </div>
          ))}
        </div>
      ))}
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
    </React.Fragment>
  );
};

export default App;
