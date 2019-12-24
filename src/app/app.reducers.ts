import { Todo } from './todo/model/todo.model';
import { allowedFilters } from './filter/filter.actions';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todo/todo.reducer';
import { filterReducer } from './filter/filter.reducer';

export interface AppState {
    todos: Todo[];
    filter: allowedFilters
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
};