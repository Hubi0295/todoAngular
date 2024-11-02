import { AfterViewChecked, Component, ViewChild, ViewChildren } from '@angular/core';
import { Todo } from '../shared/interfaces/todo.interface';
import { TodoComponent } from './todo/todo.component';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements AfterViewChecked {
    todos: Todo[]=JSON.parse(localStorage.getItem('todos')!) ?? [];
    errorMessage ='';
    @ViewChild(TodoComponent) TodoC !: TodoComponent;
    @ViewChildren(TodoComponent) TodoCs !: TodoComponent;
    ngAfterViewInit(): void{
        console.log(this.TodoC);
    }
    ngAfterViewChecked(): void {
        console.log(this.TodoC);
    }
    addTodo(todo: string): void {
      if(todo.length>3){
        this.todos.push({name: todo, isComplete: false});
        localStorage.setItem('todos',JSON.stringify(this.todos));
      }
      else{
        this.errorMessage='Musi zawierać conajmniej 4 znaki!';
        return;
      }
      console.log("Nowo dodane zadanie: ",todo);
      console.log("Aktualna lista todo: ",this.todos);
    }

    clearErrorMessage(){
      this.errorMessage='';
    }

  deleteTodo(i: number) {
    this.todos = this.todos.filter((todo,index)=> index!=i);
    localStorage.setItem('todos',JSON.stringify(this.todos));

  }
  changeTodoStatus(i: number){
      this.todos[i]={
        ...this.todos[i],
        isComplete : !this.todos[i].isComplete
      }
      localStorage.setItem('todos',JSON.stringify(this.todos));

  }
}
