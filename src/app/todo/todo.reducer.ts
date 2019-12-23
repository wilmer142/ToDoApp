import { Actions, ADD_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO } from './todo.actions';
import { Todo } from './model/todo.model';

const initialState: Todo[] = [
    new Todo('Ngrx POC'),
    new Todo('Elegans POC')
];

export function todoReducer(state = initialState, action: Actions): Todo[] {
    
    switch (action.type) {
        case ADD_TODO:
            const todo = new Todo(action.text);
            return [ ...state, todo ];

        case TOGGLE_TODO:
            return state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ... todoEdit,
                        completed: !todoEdit.completed
                    }
                } else {
                    return todoEdit;
                }
            });

        case EDIT_TODO:
            return state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    console.log(todoEdit.text);
                    return {
                        ... todoEdit,
                        text: action.text
                    }
                } else {
                    return todoEdit;
                }
            });

        case DELETE_TODO:
            return state.filter(x => x.id !== action.id);
    
        default:
            return state;
    }
}