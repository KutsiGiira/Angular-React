import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type task } from './task.model';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
 @Input({required: true}) task!: task
 @Output() complete = new EventEmitter<string>();

 onCompletTask(){
  this.complete.emit(this.task.id);
 }
}
