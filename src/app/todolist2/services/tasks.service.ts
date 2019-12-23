import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class TasksService {

  private tasksList: Array<string> = [];
  private taskDone: Array<string> = [];

  tasksListObs = new BehaviorSubject<Array<string>>(this.tasksList);
  tasksDoneObs = new BehaviorSubject<Array<string>>(this.taskDone);

  add(task: string) {
    if (task !== '') {
      this.tasksList.push(task);
      this.tasksListObs.next(this.tasksList);

    } else {console.log('Nie wpisano zadania!'); }
  }
  remove(task: string) {
    this.tasksList = this.tasksList.filter(e => e !== task);
    this.tasksListObs.next(this.tasksList);

  }
  done(task: string) {
    this.taskDone.push(task);
    this.remove(task);
    this.tasksDoneObs.next(this.taskDone);
  }

  getTaskListObs() : Observable<Array<string>>{
    return this.tasksListObs.asObservable();
  }

  getTaskDoneObs() : Observable<Array<string>>{
    return this.tasksDoneObs.asObservable();
  }
}


