import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostListComponent } from "../post-list/post-list.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
  imports: [PostListComponent],

})
export class PostComponent implements OnInit {
  title:string = "Post of tabs";
  postParentMessage:string = "Message Commmmming from post";
  childMessage:string = "From child component";
  OutputChild:string = "Message from output child";
  @Output() messageEvent = new EventEmitter<string>();
  @Input() Parent!:string;
  constructor(){}
  ngOnInit(): void {
  }
  sendMessage(){
    this.messageEvent.emit(this.OutputChild);
  }
}