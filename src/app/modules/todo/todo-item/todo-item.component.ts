import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem, TodoStatus} from '../todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() data: TodoItem;
  @Output() delete = new EventEmitter<TodoItem>();
  @Output() done = new EventEmitter<TodoItem>();

  status = TodoStatus;

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(): void {
    this.delete.emit(this.data);
  }

  setItemDone(): void{
    this.data.status = TodoStatus.CLOSED;
    this.done.emit(this.data);
  }
}
