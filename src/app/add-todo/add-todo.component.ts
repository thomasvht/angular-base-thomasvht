import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }

  add(input: any) {
    this.todosService.add(input.target.value);
    input.target.value = '';
  }
}
