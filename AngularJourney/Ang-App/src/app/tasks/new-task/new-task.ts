import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<{title: string; summary: string; date: string}>();
    title = '';
    summary = '';
    date = '';

  onClose(){
    this.close.emit()
  }

  onSubmit(){
    this.add.emit({
      title: this.title,
      summary: this.summary,
      date: this.date
    });
  }
}
