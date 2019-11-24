import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { Todolist2Component } from './todolist2/todolist2.component';

import { AddTaskComponent } from './todolist2/add-task/add-task.component';
import { TodoTaskComponent } from './todolist2/todo-task/todo-task.component';
import { DoneTaskComponent } from './todolist2/done-task/done-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    CurrencyConverterComponent,
    Todolist2Component,

    AddTaskComponent,

    TodoTaskComponent,

    DoneTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
