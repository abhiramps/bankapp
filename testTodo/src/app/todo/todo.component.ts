// import { HtmlAstPath } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
// import { title } from 'process';
//  import { StreamState } from 'http2';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
@Input() todo:string="" 
@Output() deleteTodo= new EventEmitter();


 
  constructor() { }

  ngOnInit(): void {
  }

  delete(todo:any){
    this.deleteTodo.emit(todo)
    //alert(todo)
  }
}

