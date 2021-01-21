import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {TodoListComponent} from './modules/todo/todo-list/todo-list.component';
import {ListAdderComponent} from './modules/todo/list-adder/list-adder.component';
import {FormsModule} from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent,
        TodoListComponent,
        ListAdderComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
