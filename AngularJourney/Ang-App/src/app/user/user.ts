import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Users } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({required: true}) user!: Users;
  @Output() select = new EventEmitter<string>();
  onSelectUser(){
    this.select.emit(this.user.id)
  }
}
