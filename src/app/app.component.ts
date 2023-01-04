import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store';
import { async_increment, decrement, increment } from './store/actions/counter.actions';
import {
  selectCount,
  selectCounter,
} from './store/selectors/counter.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // counter$: Observable<{ count: number }>;
  counter$: Observable<number>;

  constructor(private store$: Store<AppState>) {
    // console.log('Store 服务: ', store$);

    this.counter$ = this.store$.pipe(select(selectCount));

    this.store$.pipe(select(selectCounter)).subscribe((value) => {
      // console.log('selectCounter: ', value);
    });
  }

  increment() {
    this.store$.dispatch(increment({count: 5}));
  }

  async_increment() {
    this.store$.dispatch(async_increment())
  }

  decrement() {
    this.store$.dispatch(decrement());
  }
}
