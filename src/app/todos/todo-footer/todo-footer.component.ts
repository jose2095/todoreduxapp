import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { filtrosValidos, setFiltro } from '../../filtro/filtro.actions';
import { eliminarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.scss'
})
export class TodoFooterComponent implements OnInit{

  filtroActual: filtrosValidos = 'todos';
  filtros: filtrosValidos[] = ['todos','completados','pendientes'];
  pendientes:number = 0;
  constructor(private store:Store<AppState>){

  }

  ngOnInit(): void {
    this.store.select('filtro')
    .subscribe(filtro => {
      this.filtroActual = filtro;
    });

    this.store.subscribe(state=>{
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    })
  }

  aplicarFiltro(filtro:filtrosValidos){
    this.store.dispatch(setFiltro({filtro}))
  }

  limpiar(){
    this.store.dispatch(eliminarCompletados());
  }
}
