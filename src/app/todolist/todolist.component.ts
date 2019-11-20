import { Component} from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {
  newTodoTitle = '';

  todos: Array<Todo> = [];

addTodo() {
  if (!this.newTodoTitle) {
    return;
  }
  const newTodo: Todo = {
    title: this.newTodoTitle,
    complete: false
  };
  this.todos.push(newTodo);
  this.newTodoTitle = '';
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
    }
}

interface Todo {
  title: string;
  complete: boolean;

}
