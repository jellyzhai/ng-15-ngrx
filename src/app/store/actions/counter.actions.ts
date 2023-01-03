import { createAction, props } from '@ngrx/store';

export const increment = createAction('increment');

export const decrement = createAction('decrement');

/*
increment action 方法:  () => ({
        type
      })
*/
console.log('increment action 方法: ', increment);
