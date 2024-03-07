import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { borrar, editar, toggle } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent implements OnInit{
  chkCompletado!:FormControl;
  txtInput!:FormControl;
  editando = false;

  @Input() todo!:Todo;
  @ViewChild('inputFisico') txtFisico!:ElementRef;

  constructor(private store:Store<AppState>){}

  ngOnInit(){
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe(valor =>{
      this.store.dispatch(toggle({id:this.todo.id}))
    })
  }

  editar(){
    this.editando=true;
    this.txtInput.setValue(this.todo.texto)
    setTimeout(()=>{
      this.txtFisico.nativeElement.select();
    },1)    
  }

  terminar(){
    this.editando=false;

    if(this.txtInput.invalid || this.txtInput.value === this.todo.texto)return;

    this.store.dispatch(
      editar({id:this.todo.id,texto:this.txtInput.value})
    )
  }

  borrar(){
    this.store.dispatch(borrar({id:this.todo.id}))
  }
}
