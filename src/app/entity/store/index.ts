import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromTodo from './reducers/todo.reducer';

export const stateFeatureKey = 'state';

export interface EntityState {

  [fromTodo.todoFeatureKey]: fromTodo.TodoState;
}

export const reducers: ActionReducerMap<EntityState> = {

  [fromTodo.todoFeatureKey]: fromTodo.reducer,
};


export const metaReducers: MetaReducer<EntityState>[] = isDevMode() ? [] : [];
