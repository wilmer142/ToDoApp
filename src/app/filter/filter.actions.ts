import { Action } from '@ngrx/store';


export const SET_FILTER = '[Filter] Set filter';
export type allowedFilters = 'all' | 'active' | 'completed';

export class SetFilterAction implements Action {
    readonly type = SET_FILTER;

    constructor(public filter: allowedFilters) { }
}

export type actions = SetFilterAction;