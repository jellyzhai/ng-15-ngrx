import { createAction, props } from '@ngrx/store';

export const addToDo = createAction('addToDo', props<{title: string}>());

export const deleteToDo = createAction('deleteToDo', props<{id: string}>());
