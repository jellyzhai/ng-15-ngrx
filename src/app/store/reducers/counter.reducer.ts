import { Action, createReducer, on } from '@ngrx/store';
import { decrement, increment } from '../actions/counter.actions';

export const counterFeatureKey = 'counter';

export interface State {
  count: number
}

export const initialState: State = {
  count: 0,
};

export const reducer = createReducer(
  initialState,
  on(increment, (state, action) => ({
    ...state,
    count: state.count + action.count
  })),
  on(decrement, state => ({
    ...state,
    count: state.count - 1
  }))
);

/*
reducer ： ƒ (state = initialState, action) {
    const reducer = map.get(action.type);
    return reducer ? reducer(state, action) : state;
  }
*/
console.log('reducer ：', reducer);
