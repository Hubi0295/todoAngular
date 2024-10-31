<<<<<<< HEAD
import { Component, EventEmitter, Input, Output } from '@angular/core';
=======
import {Component, EventEmitter, Input, Output} from '@angular/core';
>>>>>>> 9cce2d8c9cbd3235ec8a6a9f438cd91f50ea4d70
import {Todo} from '../../shared/interfaces/todo.interface'
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
    @Input() task!: Todo;
    @Input() i!: number;
    @Output() delete = new EventEmitter<void>();
    openModal = false;
    changeTodoStatus(todo: Todo){
      todo.isComplete = !todo.isComplete;
  }
  toggleModal(): void{
    this.openModal=!this.openModal;
  }

  deleteTodo() {
    this.delete.emit();
  }
}
