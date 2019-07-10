import { Injectable } from '@angular/core';

export interface Todo {
  name: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodoService {
  private todos: Todo[] = [];

  getAll(): Todo[] {
    return this.todos;
  }

  add(todo: Todo): Todo[] {
    this.todos.push(todo);
    return this.todos;
  }

  remove(index: number): Todo[] {
    this.todos.splice(index, 1);
    return this.todos;
  }

  toggleComplete(index: number): Todo[] {
    this.todos[index].completed = !this.todos[index].completed;
    return this.todos;
  }
}
