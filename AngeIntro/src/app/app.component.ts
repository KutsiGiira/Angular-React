import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarCompoenent } from "./Navbar/navbar.component";
import { PostComponent } from "./post/post.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarCompoenent, PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
[x: string]: any;
  title = 'AngeIntro';
  pMessage:string = "Message coming form parent comp"
  nMessage:string = "From nav comp"
  Message!:string;
  fromChildOutput!:string;

  @ViewChild(PostComponent) childComp!: PostComponent;
  constructor(){
    console.log(this.childComp);
  }
  ngAfterViewInit(): void {
console.log(this.childComp)
    this.Message = this.childComp.childMessage;
  }
  receiveMessage($event: any){
    this.fromChildOutput = $event
  }
}