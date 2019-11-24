import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.scss']
})
export class DoneTaskComponent  {

  @Input()
  taskDone: Array<string> = [];


}
