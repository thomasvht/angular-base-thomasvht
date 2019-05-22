import { Component, OnInit, Input } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: string;

  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }

  removeTodo(title: string) {
    this.todosService.remove(title);
  }

}
