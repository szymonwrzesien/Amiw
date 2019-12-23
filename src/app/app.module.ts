import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TodolistComponent} from './todolist/todolist.component';
import {Todolist2Component} from './todolist2/todolist2.component';

import {AddTaskComponent} from './todolist2/add-task/add-task.component';
import {TodoTaskComponent} from './todolist2/todo-task/todo-task.component';
import {DoneTaskComponent} from './todolist2/done-task/done-task.component';
import {TasksService} from "./todolist2/services/tasks.service";

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    Todolist2Component,

    AddTaskComponent,

    TodoTaskComponent,

    DoneTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
