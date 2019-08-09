import React from 'react';

// const value = [
//     {
//       id: 1234,
//       name: 'Tomorrow',
//       todoItems: [
//         {
//           text: 'Clean the Apartment',
//           id: 1234,
//         },
//       ],
//     },
//   ],
const actionTypes = {
  ADD_LIST: 'ADD_LIST',
  REMOVE_LIST: 'REMOVE_LIST',
  CLEAR_LIST: 'CLEAR_LIST',
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
};

// const action = {
//   type: actionTypes.ADD_LIST,
//   payload: {
//     id: Math.random(),
//     name: 'Done',
//   },
// };

const addList = (state, action) => {
  return [...state, action.payload];
};

// const action = {
//   type: actionTypes.REMOVE_LIST,
//   payload: {
//     id,
//   },
// };
const removeList = (state, action) => {
  return state.filter(todoList => todoList.id !== action.payload.id);
};

// const action = {
//   type: actionTypes.CLEAR_LIST,
//   payload: {
//     id,
//   },
// };
const clearList = (state, action) => {
  return state.map((todoList, index) => {
    if (todoList.id !== action.payload.id) return todoList;

    const emptyTodoList = {
      ...state[index],
      todoItems: [],
    };
    return emptyTodoList;
  });
};

// const action = {
//   type: actionTypes.ADD_TODO,
//   payload: {
//     listId,
//     todo: {
//       id: Math.random(),
//       text: text,
//     },
//   },
// };

const addTodo = (state, action) => {
  return state.map((todoList, index) => {
    if (todoList.id !== action.payload.listId) return todoList;

    const updatedTodoList = {
      ...state[index],
      todoItems: [...state[index].todoItems, action.payload.todo],
    };
    return updatedTodoList;
  });
};

// const action = {
//   type: actionTypes.REMOVE_TODO,
//   payload: {
//     listId,
//     todoId,
//   },
// };
const removeTodo = (state, action) => {
  return state.map((todoList, index) => {
    if (todoList.id !== action.payload.listId) return todoList;

    const updatedTodoList = {
      ...state[index],
      todoItems: state[index].todoItems.filter(
        todoItem => todoItem.id !== action.payload.todoId,
      ),
    };
    return updatedTodoList;
  });
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

const initialState = [];

const TodosContext = React.createContext();
export default TodosContext;

export const TodosProvider = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  // const setMyTodos = () => {
  //   console.log('setMyTodos');
  //   const action = {
  //     type: 'ADD_LIST',
  //     payload: {
  //       new: 'new',
  //     },
  //   };
  //   dispatch(action);
  // };

  const value = {
    state,
    dispatch,
  };

  return (
    <TodosContext.Provider value={value}>
      {props.children}
    </TodosContext.Provider>
  );
};
