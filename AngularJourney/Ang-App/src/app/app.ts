import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { User } from "./user/user";
import { DUMMY_USERS } from './user/dummy-users';
import { Tasks } from "./tasks/tasks";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ang-App');
  user = DUMMY_USERS;
  selectedUser?: string;
  get SelectedUser(){
    return this.user.find((u) => u.id === this.selectedUser)!;
  }

  onSelectUser(id: string){
    this.selectedUser = id;
  }
}
