import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Array<string>> = this.todosService.todos$;

  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }

}
