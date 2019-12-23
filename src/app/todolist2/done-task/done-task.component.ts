import { Component, Input } from '@angular/core';
import {TasksService} from "../services/tasks.service";

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.scss']
})
export class DoneTaskComponent  {

  taskDone: Array<string> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTaskDoneObs().subscribe(tasks =>{
      this.taskDone = tasks;
    });

  }

}
