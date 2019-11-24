import { Component} from '@angular/core';
import { FileDetector } from 'selenium-webdriver/remote';

@Component({
  selector: 'app-todolist2',
  templateUrl: './todolist2.component.html',
  styleUrls: ['./todolist2.component.scss']
})
export class Todolist2Component {

  tasksList: Array<string> = [];
  taskDone: Array<string> = [];

  add(task: string) {
    if (task !== '') {
      this.tasksList.push(task);

    } else {console.log('Nie wpisano zadania!'); }
  }
  remove(task: string) {
    this.tasksList = this.tasksList.filter(e => e !== task);

  }
  done(task: string) {
  this.taskDone.push(task);
  this.remove(task);
  }

}
