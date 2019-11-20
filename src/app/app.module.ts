import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { Todolist2Component } from './todolist2/todolist2.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    CurrencyConverterComponent,
    Todolist2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
