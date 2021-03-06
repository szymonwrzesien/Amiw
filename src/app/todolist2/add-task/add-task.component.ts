import { Component, Output, EventEmitter } from '@angular/core';
import {TasksService} from "../services/tasks.service";


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent  {

  newTask:string;

  constructor(private tasksService: TasksService){

  }

  add(){
    this.tasksService.add(this.newTask);
    this.newTask = '';

  }

}
