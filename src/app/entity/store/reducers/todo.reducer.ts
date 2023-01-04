import { Action, createReducer, on } from '@ngrx/store';
import { addToDo, deleteToDo } from '../actions/todo.actions';
import { v4 as uuidv4 } from 'uuid';

export const todoFeatureKey = 'todo';

export interface Todo {
  id: string
  title: string
}

export interface TodoState {
  todos: Todo[]
}

export const initialState: TodoState = {
  todos: []
};

export const reducer = createReducer(
  initialState,
  on(addToDo, (state, action) => ({
    ...state,
    todos: [
      ...state.todos,
      {
        id: uuidv4(),
        title: action.title
      }
    ]
  })),
  on(deleteToDo, (state, action) => {
    const newState = JSON.parse(JSON.stringify(state)) as TodoState;
    const index = newState.todos.findIndex(todo => todo.id === action.id)

    newState.todos.splice(index, 1);

    return newState;
  })
);
