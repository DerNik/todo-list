import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoItemComponent } from './todo-item.component';
import {TodoItem} from '../todo-item';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    const item = new TodoItem();
    item.status = 0;
    item.description = 'Item1';
    item.date = '01.01.1970';
    component.data = item;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
