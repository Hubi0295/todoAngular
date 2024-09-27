import { Component } from '@angular/core';
import { Todo } from '../shared/interfaces/todo.interface';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
    todos: Todo[]=[];
    errorMessage ='';
    addTodo(todo: string): void {
      if(todo.length>3){
        this.todos.push({name: todo, isComplete: false});
      }
      else{
        this.errorMessage='Musi zawierać conajmniej 4 znaki!';
        return;
      }
      console.log("Nowo dodane zadanie: ",todo);
      console.log("Aktualna lista todo: ",this.todos);
    }
    changeTodoStatus(i: number){
        this.todos[i].isComplete=!this.todos[i].isComplete;
    }
    clearErrorMessage(){
      this.errorMessage='';
    }
}
