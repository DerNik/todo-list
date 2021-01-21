import {TestBed} from '@angular/core/testing';

import {DataproviderService} from './dataprovider.service';
import {TodoItem, TodoStatus} from '../../todo-item';

describe('DataproviderService', () => {
  let service: DataproviderService;
  let list: TodoItem[];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataproviderService);

    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };

    spyOn(localStorage, 'getItem')
    .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
    .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
    .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
    .and.callFake(mockLocalStorage.clear);

    list = [];
    const item1: TodoItem = new TodoItem();
    item1.description = 'Item1';
    item1.date = '01.01.1970';
    item1.status = TodoStatus.OPEN;
    list.push(item1);
    const item2: TodoItem = new TodoItem();
    item2.description = 'Item2';
    item2.date = '02.02.1970';
    item2.status = TodoStatus.CLOSED;
    list.push(item2);
    const item3: TodoItem = new TodoItem();
    item3.description = 'Item3';
    item3.date = '03.03.1970';
    item3.status = TodoStatus.OPEN;
    list.push(item3);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('saveList', () => {

    it('should store item list in localStorage',
      () => {
        service.saveList(list);
        expect(localStorage.getItem('todoList')).toEqual('[{\"status\":0,\"description\":\"Item1\",\"date\":\"01.01.1970\"},{\"status\":1,\"description\":\"Item2\",\"date\":\"02.02.1970\"},{\"status\":0,\"description\":\"Item3\",\"date\":\"03.03.1970\"}]');
      });
  });

  describe('loadList', () => {
    it('should return Itemlist',
      () => {
        localStorage.setItem('todoList', JSON.stringify(list));
        service.loadList().subscribe((items: TodoItem[]) => {
          expect(items.length).toBe(list.length);
          expect(items[0].description).toBe(list[0].description);
          expect(items[0].date).toBe(list[0].date);
          expect(items[0].status).toBe(list[0].status);
          expect(items[1].description).toBe(list[1].description);
          expect(items[1].date).toBe(list[1].date);
          expect(items[1].status).toBe(list[1].status);
          expect(items[2].description).toBe(list[2].description);
          expect(items[2].date).toBe(list[2].date);
          expect(items[2].status).toBe(list[2].status);
        });
      });
  });
});
