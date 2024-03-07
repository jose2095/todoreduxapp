import { createReducer, on } from '@ngrx/store';
import { borrar, crear,editar,eliminarCompletados,toggle, toggleAll } from './todo.actions';
import { Todo } from './models/todo.model';


export const initialState:Array<Todo>=[
  new Todo('salvar al mundo')
];

const _todoReducer = createReducer(
  initialState,
  on(crear, (state, {texto}) => [...state,new Todo(texto)]),
  
  on(toggle,(state,{id})=> {
    return state.map(todo => {
      if(todo.id === id){
              return {
        ...todo,
        completado: !todo.completado
      }
      }
      else{
        return todo;
      }

    })
  }),
  on(editar,(state,{id,texto})=> {
    return state.map(todo => {
      if(todo.id === id){
              return {
        ...todo,
        texto: texto
      }
      }
      else{
        return todo;
      }

    })
  }),
  on(borrar,(state,{id})=>{
    return state.filter((todo)=>{
      todo.id !== id;
    })
  }),

  on(toggleAll, (state,{completado})=>{
    return state.map(todo =>{
      return {
        ...todo,
        completado:completado
      }
    })
  }),

  on(eliminarCompletados, (state)=>{
    return state.filter(todo=>{
      return !todo.completado
    })
  })
);



export function todoReducer(state:any,action:any){
    return _todoReducer(state,action)
}
