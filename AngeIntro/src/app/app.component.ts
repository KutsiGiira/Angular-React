import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarCompoenent } from "./Navbar/navbar.component";
import { PostComponent } from "./post/post.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarCompoenent, PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngeIntro';
  pMessage:string = "changed"
  nMessage:string = "From nav comp"
}
