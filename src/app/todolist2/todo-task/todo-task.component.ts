
import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss']
})
export class TodoTaskComponent {

  @Input()
  tasksList = [];

  @Output()
  emitDone = new EventEmitter<string>();

  @Output()
  emitRemove = new EventEmitter<string>();

  remove(task:string){
    this.emitRemove.emit(task);

  }

  done(task:string){
    this.emitDone.emit(task);
  }
}
