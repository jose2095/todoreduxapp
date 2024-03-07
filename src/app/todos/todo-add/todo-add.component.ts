import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { crear } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.scss'
})
export class TodoAddComponent {

  txtInput:FormControl;

  constructor(private store:Store<AppState>){
    this.txtInput = new FormControl('',Validators.required);
  }

  agregar(){
    if(this.txtInput.invalid) return;
    this.store.dispatch(crear({texto:this.txtInput.value}));
    this.txtInput.reset();

  }
}
