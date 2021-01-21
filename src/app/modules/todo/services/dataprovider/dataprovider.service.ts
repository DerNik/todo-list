import {Injectable, OnInit} from '@angular/core';
import {TodoItem} from '../../todo-item';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataproviderService{

  constructor() { }

  loadList(): Observable<TodoItem[]> {
    const json = JSON.parse(localStorage.getItem('todoList'));
    const todoList: TodoItem[] = [];
    for (const element in json) {
      if (element){
        todoList.push(json[element]);
      }
    }
    const obs = of(todoList);
    return obs;
  }

  saveList(itemList: TodoItem[]): void {
    localStorage.setItem('todoList', JSON.stringify(itemList));
  }
}
