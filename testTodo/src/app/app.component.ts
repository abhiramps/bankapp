import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testTodo';
  list:any=[]


  todo = "";

click() {
  this.list.push(this.todo);
  console.log(this.list);
}
onToDoChange(event: Event) {

  this.todo = (event.target as HTMLInputElement).value

}

// *****
deleteTodo(event:string){
  alert(this.todo)
}

// ******method 2)********
// using template referencing

// click(todo:string) {
//   this.list.push(todo);
//   console.log(this.list);
// }


// onToDoChange(event: Event) {

//   this.todo = (event.target as HTMLInputElement).value

// }
}