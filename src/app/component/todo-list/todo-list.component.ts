import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  public todos: Todo[] = [];
  private subscription: Subscription = new Subscription();
  constructor(private todoService: TodoService) { }
  ngOnInit(): void {
    this.subscription.add(this.todoService.getTodos().subscribe((data) => { console.log(data); this.todos = data }));

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();

  }

}
