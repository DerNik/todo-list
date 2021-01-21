import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ListAdderComponent } from './list-adder/list-adder.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



@NgModule({
  declarations: [TodoListComponent, TodoItemComponent, ListAdderComponent],
  exports: [
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ]
})
export class TodoModule { }
