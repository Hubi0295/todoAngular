import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from 'src/app/shared/interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _todos: Todo[]=JSON.parse(localStorage.getItem('todos')!) ?? [];
  todoChange = new Subject<Todo[]>();

  constructor() { }
  public get todos(){
    return this._todos.slice();
  }
  addTodo(name: string): void {
    this._todos.push({name: name, isComplete: false});
    this.saveToLocalStorage();
    this.todoChange.next(this.todos);
  }
  deleteTodo(i: number) {
    this._todos = this.todos.filter((todo,index)=> index!=i);
    this.saveToLocalStorage();
    this.todoChange.next(this.todos);
  }
  changeTodoStatus(i: number){
    this._todos[i]={
      ...this.todos[i],
      isComplete : !this.todos[i].isComplete
    }
    this.saveToLocalStorage();  
    this.todoChange.next(this.todos);
  }
  saveToLocalStorage(){
    localStorage.setItem('todos',JSON.stringify(this.todos));
  }
  
}

