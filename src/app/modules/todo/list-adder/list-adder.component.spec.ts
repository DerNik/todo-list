import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListAdderComponent } from './list-adder.component';
import {FormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

describe('ListAdderComponent', () => {
  let component: ListAdderComponent;
  let fixture: ComponentFixture<ListAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BsDatepickerModule.forRoot()
      ],
      declarations: [ ListAdderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
