import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
    ];
  };

  toggleDone (id: number) {
    this.todos.map((j, i) => {
      if( i == id) j.completed = !j.completed;
      
      return j;
    })
  };

  deleteTodos(id: number){
    this.todos = this.todos.filter((v, i) => i !== id);
  };

  addTodos(){
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
    this.inputTodo = "";
  };
  
};