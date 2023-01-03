import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { timer } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { async_increment, increment } from '../actions/counter.actions';

@Injectable()
export class CounterEffects {

  // 当前属性名称自定义，值为 observable，发出 待 ngrx 自动触发的 action
  async_increment_effect = createEffect(() => {
    return this.actions$.pipe(
      ofType(async_increment),
      mergeMap(() => timer(2000).pipe(
        map(() => increment({ count: 10 }))
      ))
    )
  });

  // actions$ observable 在每次触发 action 时，都会发出对应的 action
  constructor(private actions$: Actions) {
    this.async_increment_effect.subscribe((action) => {
      console.log('ngrx 在 effects 中自动触发的 action： ', action)
    });
  }
}
