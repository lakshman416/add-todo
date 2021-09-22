import { Component, OnInit } from '@angular/core';
import {TodoModal} from '../../models/todo.modal'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public todos:TodoModal[] = [];
  public todoName:string='';
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
      content:'First todo',
      completed:false
    },{
      content:'Second todo',
      completed:false
    },
    ]
  }

  strikeTodo(index:number){
    this.todos[index].completed = !this.todos[index].completed;

  }

  deleteTodo(index:number){
    // this.todos = this.todos.filter(todo=>this.todos.indexOf(todo) !== index);
    this.todos = this.todos.filter((todo,i)=>i !== index);
  }

  addTodo(){
    if(this.todoName){
      const todo = {
        content:this.todoName,
        completed: false
      };
      this.todos.push(todo);
      this.todoName = '';
    }
  }


}
