import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Todo } from './store/reducers/todo.reducer';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent implements AfterViewInit {
  @ViewChild('AddTodo') addTodo!: ElementRef

  todos: Todo[] = [];

  ngAfterViewInit(): void {
    fromEvent<KeyboardEvent>(this.addTodo.nativeElement, 'keyup').pipe(
      filter(event => event.key === 'Enter'),
      map(event => (<HTMLInputElement>event.target).value),
      map((title: string) => title.trim()),
      filter((title: string) => title !== '')
      ).subscribe(console.log)
  }

  todoTrackBy(_: number, todo: Todo) {
    return todo.id;
  }
}
