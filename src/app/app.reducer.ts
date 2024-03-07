import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducer";
import { filtrosValidos } from "./filtro/filtro.actions";
import { filtroReducer } from "./filtro/filtro.reducer";

export interface AppState{
    todos:Array<Todo>,
    filtro: filtrosValidos
}

export const AppReducers: ActionReducerMap<AppState> = {
    todos:todoReducer,
    filtro:filtroReducer
}