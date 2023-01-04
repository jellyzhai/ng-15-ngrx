import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityStateI, stateFeatureKey } from '..';
import { TodoState } from '../reducers/todo.reducer';

export const todoSelector = createFeatureSelector<EntityStateI>(stateFeatureKey);

export const todosSelector = createSelector(todoSelector, state => state.todo.todos);
