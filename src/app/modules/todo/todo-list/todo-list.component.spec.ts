import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TodoListComponent} from './todo-list.component';
import {DataproviderService} from '../services/dataprovider/dataprovider.service';
import {TodoItem, TodoStatus} from '../todo-item';
import {of} from 'rxjs';
import {TodoItemComponent} from '../todo-item/todo-item.component';
import {ListAdderComponent} from '../list-adder/list-adder.component';
import {FormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let dataProvider: DataproviderService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BsDatepickerModule.forRoot()
      ],
      declarations: [
        TodoListComponent,
        TodoItemComponent,
        ListAdderComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    dataProvider = new DataproviderService();
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    dataProvider = fixture.debugElement.injector.get(DataproviderService);
    spyOn(dataProvider, 'loadList').and.callFake(() => {
      const list: TodoItem[] = [];
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
      return of(list);
    });
    spyOn(dataProvider, 'saveList').and.callFake((list: TodoItem[]) => {});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add, update and delete new Item', () => {
    expect(component.list.length).toBe(3);
    const item4: TodoItem = new TodoItem();
    item4.description = 'Item3';
    item4.date = '04.04.1970';
    item4.status = TodoStatus.OPEN;
    component.addNewItem(item4);
    expect(component.list.length).toBe(4);
    component.list[3].status = TodoStatus.OPEN;
    item4.status = TodoStatus.CLOSED;
    component.updateItem(item4);
    component.list[3].status = TodoStatus.CLOSED;
    component.deleteItem(item4);
    expect(component.list.length).toBe(3);
    expect(component.list[0].description).toBe('Item1');
    expect(component.list[1].description).toBe('Item2');
    expect(component.list[2].description).toBe('Item3');
  });

  it('should display all items', () => {
    expect(component.list.length).toBe(3);
    const children: DebugElement[] = fixture.debugElement.queryAll(By.css('.item'));
    const item1: HTMLElement = children[1].nativeElement;
    expect(item1.textContent).toContain('Item2');
    const item2: HTMLElement = children[1].nativeElement;
    expect(item2.textContent).toContain('Item2');
    const item3: HTMLElement = children[2].nativeElement;
    expect(item3.textContent).toContain('Item3');
  });
});
