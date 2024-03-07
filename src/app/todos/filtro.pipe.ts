import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosValidos } from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos:Array<Todo>, filtro:filtrosValidos): Array<Todo> {
    switch(filtro){
      case 'completados':
        return todos.filter(todo => {return todo.completado})
        case 'pendientes':
        return todos.filter(todo => {return !todo.completado})
        default:
          return todos;
    }
  }

}
