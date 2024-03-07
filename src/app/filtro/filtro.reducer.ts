import { createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFiltro } from './filtro.actions';


export const initialState:filtrosValidos | any = 'todos';

const _filtroReducer = createReducer(initialState,
    on(setFiltro,(state,{filtro}) => {
       return state = filtro;
    })
);


export function filtroReducer(state:any,action:any){
    return _filtroReducer(state,action)
}
