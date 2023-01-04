import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { fromEvent, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { addToDo, deleteToDo } from './store/actions/todo.actions';
import { Todo } from './store/reducers/todo.reducer';
import { todosSelector } from './store/selectors/todo.selectors';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent implements OnInit, AfterViewInit {
  @ViewChild('AddTodo') addTodo!: ElementRef

  todos!: Observable<Todo[]>;

  constructor(private store$: Store) {
  }

  ngOnInit(): void {
    this.todos = this.store$.pipe(select(todosSelector))
  }

  ngAfterViewInit(): void {
    fromEvent<KeyboardEvent>(this.addTodo.nativeElement, 'keyup').pipe(
      filter(event => event.key === 'Enter'),
      map(event => (<HTMLInputElement>event.target).value),
      map((title: string) => title.trim()),
      filter((title: string) => title !== '')
    ).subscribe(title => {
      this.store$.dispatch(addToDo({ title }));
      this.addTodo.nativeElement.value = '';
    })
  }

  todoTrackBy(_: number, todo: Todo) {
    return todo.id;
  }

  deleteTodo(id: string) {
    this.store$.dispatch(deleteToDo({id}));
  }
}
