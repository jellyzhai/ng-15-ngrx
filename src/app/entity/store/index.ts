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

export interface EntityStateI {

  [fromTodo.todoFeatureKey]: fromTodo.TodoState;
}

export const reducers: ActionReducerMap<EntityStateI> = {

  [fromTodo.todoFeatureKey]: fromTodo.reducer,
};


export const metaReducers: MetaReducer<EntityStateI>[] = isDevMode() ? [] : [];
