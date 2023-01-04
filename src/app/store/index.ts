import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromCounter from './reducers/counter.reducer';

export interface AppState {

  [fromCounter.counterFeatureKey]: fromCounter.CountState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromCounter.counterFeatureKey]: fromCounter.reducer,
};

function logger(reducer: ActionReducer<AppState>): ActionReducer<any> {
  return (state, action) => {
    const newResult = reducer(state, action);
    // console.log('最新的状态： ', newResult);
    // console.log('之前的状态： ', state);
    // console.log('action： ', action);
    return newResult
  }
}

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [logger] : [];
