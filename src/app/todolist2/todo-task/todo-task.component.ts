
import { Component, Input, Output, EventEmitter} from '@angular/core';
import {TasksService} from '../services/tasks.service';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss']
})
export class TodoTaskComponent {

  tasksList = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTaskListObs().subscribe(tasks =>{
      this.tasksList = tasks;
    });

  }

  remove(task: string) {
this.tasksService.remove(task);

  }

  done(task: string) {
    this.tasksService.done(task);
  }
}
