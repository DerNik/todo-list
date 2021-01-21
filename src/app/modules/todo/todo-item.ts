export class TodoItem {
  description: string;
  status: TodoStatus = TodoStatus.OPEN;
  date: string;
}

export enum TodoStatus {
  OPEN,
  CLOSED
}
