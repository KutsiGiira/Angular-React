import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  title:string = "Post of tabs"
  postParent:string = "Post is the parent"
  @Input() parent!: string;
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}