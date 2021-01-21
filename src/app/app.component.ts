import { Component } from '@angular/core';
import {DataproviderService} from './modules/todo/services/dataprovider/dataprovider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';

  constructor() {
  }
}
