import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TodoItem, TodoStatus} from '../todo-item';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-list-adder',
  templateUrl: './list-adder.component.html',
  styleUrls: ['./list-adder.component.css'],
  providers: [DatePipe]
})
export class ListAdderComponent implements OnInit {

  @Output() newItem = new EventEmitter<TodoItem>();
  private form: HTMLFormElement;
  todo = new TodoItem();
  date: string;

  /* UI Texts */
  header = 'Add new item to list';
  descHead = 'Description';
  descPH = 'Enter description';
  descErrtxt = 'Please specify your task';
  addBtnTxt = 'Add Item';
  dateHead = 'Date';
  datePH = 'Enter date';

  constructor(private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
  }

  addItem(): void {
    this.todo.date = this.datepipe.transform(this.date, 'dd.MM.yyyy');;
    this.todo.status = TodoStatus.OPEN;
    this.newItem.emit(this.todo);
    this.todo = new TodoItem();
    this.date = null;
    this.form.classList.remove('was-validated');
  }

  validate(e: Event): void{
    if (this.form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    this.form.classList.add('was-validated');
  }
}
