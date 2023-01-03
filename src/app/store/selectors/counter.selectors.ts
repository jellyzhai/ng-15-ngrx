import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { counterFeatureKey } from '../reducers/counter.reducer';

export const selectCounter = createFeatureSelector(counterFeatureKey);

export const selectCount = createSelector(
  selectCounter,
  (state: any) => state.count
);

/*
selectCounter 和 selectCount 均是以下方法
————————————————————————————————————————————
function memoized() {
        if (overrideResult !== undefined) {
            return overrideResult.result;
        }
        if (!lastArguments) {
            lastResult = projectionFn.apply(null, arguments);
            lastArguments = arguments;
            return lastResult;
        }
        if (!isArgumentsChanged(arguments, lastArguments, isArgumentsEqual)) {
            return lastResult;
        }
        const newResult = projectionFn.apply(null, arguments);
        lastArguments = arguments;
        if (isResultEqual(lastResult, newResult)) {
            return lastResult;
        }
        lastResult = newResult;
        return newResult;
    }
*/
