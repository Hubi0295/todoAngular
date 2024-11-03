import { AfterViewChecked, Component, inject, OnDestroy, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Todo } from '../shared/interfaces/todo.interface';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from '../core/services/todo.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements AfterViewChecked, OnInit, OnDestroy {
    // todoService = inject(TodoService);
    todos: Todo[]=this.todoService.todos;
    errorMessage ='';

    constructor(private todoService: TodoService){};
    sub !: Subscription;
    ngOnInit(): void {
        this.sub = this.todoService.todoChange.subscribe({
          next: arrTodos => this.todos = arrTodos
        })
    }

    @ViewChild(TodoComponent) TodoC !: TodoComponent;
    @ViewChildren(TodoComponent) TodoCs !: TodoComponent;
    ngAfterViewInit(): void{
        console.log(this.TodoC);
    }
    ngAfterViewChecked(): void {
        console.log(this.TodoC);
    }
    addTodo(todo: string): void {
      if(todo.length<4){
        this.errorMessage='Musi zawierać conajmniej 4 znaki!';
        return;
      }
      this.todoService.addTodo(todo);

    }

  clearErrorMessage(){
    this.errorMessage='';
  }
  deleteTodo(i: number) {
    this.todoService.deleteTodo(i);
  }
  changeTodoStatus(i: number){
    this.todoService.changeTodoStatus(i);
  }
  ngOnDestroy(): void {
        this.sub.unsubscribe;
  }

}
