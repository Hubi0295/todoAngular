import {AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {Todo} from '../../shared/interfaces/todo.interface'
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnChanges, OnInit, DoCheck, AfterViewInit,OnDestroy {

    @Input() task!: Todo;
    @Input() i!: number;
    @Output() delete = new EventEmitter<void>();
    @Output() changeStatus = new EventEmitter<number>();
    @ViewChild('li') li!:ElementRef;
    
    openModal = false;
    timeout!: number;
    changeTodoStatus(){
      this.changeStatus.emit(this.i);
  }
  constructor(){
    console.log(this.task);
  }
  ngOnDestroy(): void {
      console.log('destroy')
      clearTimeout(this.timeout);
  }
  ngAfterViewInit(): void {
      console.log(this.li);
  }
  ngDoCheck(): void {
      console.log('NG DOCHECK DZIALA');
  }
  ngOnInit(): void {
    this.timeout = setTimeout(()=>{
      console.log('SetTimeout');
    },3000)
  }
  ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
  }
  toggleModal(): void{
    this.openModal=!this.openModal;
  }

  deleteTodo() {
    this.delete.emit();
  }
}
