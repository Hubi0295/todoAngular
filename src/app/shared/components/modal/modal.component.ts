import { AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
// import { interval, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent{
  @Input() title!: string;
  @Output() close = new EventEmitter<void>();
  // sub !: Subscription;
  // obs$ = interval(1000);
  // ngOnInit(): void {
  //   //  this.sub= of(1).subscribe({
  //   //   next: value => console.log(value),
  //   //   error: err => console.log(err),
  //   //   complete: () => console.log('Test')
  //   // }); 
  //   // this.sub = interval(1000).subscribe({
  //   //   next: number => console.log(number)
  //   // })  
  //   // console.log(this.sub);
  // }
  // ngOnDestroy(): void {
      
  // }
  onClose(){
    // this.sub.unsubscribe();
    this.close.emit();
  }
}
