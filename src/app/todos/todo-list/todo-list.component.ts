import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { filtrosValidos } from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit{
  todos:Array<Todo> = [];
  filtroActual!:filtrosValidos;

  constructor(private store:Store<AppState>){
    
  }

  ngOnInit(): void {
    this.store.subscribe(
      ({todos,filtro}) => {
        this.todos = todos;
        this.filtroActual = filtro;
      }
    )
  }




}
