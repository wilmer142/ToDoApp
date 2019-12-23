import { Actions, ADD_TODO } from './todo.actions';
import { Todo } from './model/todo.model';

const initialState: Todo[] = [];

export function todoReduder(state = initialState, action: Actions): Todo[] {
    
    switch (action.type) {
        case ADD_TODO:
            const todo = new Todo(action.text);
            return [ ...state, todo ];
    
        default:
            return state;
    }
}