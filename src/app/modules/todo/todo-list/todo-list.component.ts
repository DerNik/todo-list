import { Component, OnInit } from '@angular/core';
import {DataproviderService} from '../services/dataprovider/dataprovider.service';
import {TodoItem} from '../todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  list: TodoItem[] = [];

  /* UI Texts */
  header = 'Todos:';
  noItmTxt = 'There are no todos on your list!';

  constructor(private dataprovider: DataproviderService) { }

  ngOnInit(): void {
    this.dataprovider.loadList().subscribe((res: TodoItem[]) => {
      this.list = res;
    });
  }

  addNewItem(newItem: TodoItem): void{
    this.list.push(newItem);
    this.dataprovider.saveList(this.list);
  }

  deleteItem(item: TodoItem): void{
    const index = this.list.indexOf(item, 0);
    if (index > -1) {
      this.list.splice(index, 1);
    }
    this.dataprovider.saveList(this.list);
  }
  updateItem(item: TodoItem): void {
    const index = this.list.indexOf(item, 0);
    this.list[index] = item;
    this.dataprovider.saveList(this.list);
  }
}
