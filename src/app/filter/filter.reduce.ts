import { allowedFilters, actions, SET_FILTER } from './filter.actions';

const initialState: allowedFilters = 'all';

export function filterReducer(state = initialState, action: actions): allowedFilters {

    switch (action.type) {
        case SET_FILTER:
            
            return action.filter
    
        default:
            return state;
    }

}