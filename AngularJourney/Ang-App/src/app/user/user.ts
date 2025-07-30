import { Component, EventEmitter, Input, Output } from '@angular/core';
type Users = {
  id: string;
  name: string;
}
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
