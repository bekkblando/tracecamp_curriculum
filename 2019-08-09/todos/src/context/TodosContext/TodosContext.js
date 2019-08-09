import React from 'react';

const value = {
  userid: 1234,
  username: 'Bob',
  todoLists: [
    {
      id: 1234,
      name: 'Tomorrow',
      todoItems: [
        {
          text: 'Clean the Apartment',
          id: 1234,
        },
      ],
    },
  ],
};

const actionTypes = {
  ADD_LIST: 'ADD_LIST',
  REMOVE_LIST: 'REMOVE_LIST',
  CLEAR_LIST: 'CLEAR_LIST',
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
};

const addList = (state, action) => {
  console.log('addList');
  return state;
};
const removeList = (state, action) => {
  console.log('removeList');
  return state;
};
const clearList = (state, action) => {
  console.log('clearList');
  return state;
};
const addTodo = (state, action) => {
  console.log(addTodo);
  return state;
};
const removeTodo = (state, action) => {
  console.log('removeTodo');
  return state;
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_LIST:
      return addList(state, action);
    case actionTypes.REMOVE_LIST:
      return removeList(state, action);
    case actionTypes.CLEAR_LIST:
      return clearList(state, action);
    case actionTypes.ADD_TODO:
      return addTodo(state, action);
    case actionTypes.REMOVE_TODO:
      return removeTodo(state, action);
    default:
      return state;
  }
};

const Todos = () => {
  const [todos, setTodos] = React.useState();
  const [state, dispatch] = React.useReducer(reducer);

  dispatch({
    action: actionTypes.ADD_TODO,
    payload: {
      text: 'Clean the apartment',
      id: 1234,
    },
  });
  return '';
};

const TodosContext = React.createContext();
export default TodosContext;

export const TodosProvider = props => {
  return <TodosContext.Provider>{props.children}</TodosContext.Provider>;
};
