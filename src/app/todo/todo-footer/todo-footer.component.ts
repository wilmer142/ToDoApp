import { Component, OnInit } from '@angular/core';
import { allowedFilters, SetFilterAction } from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filters: allowedFilters [] = ['all', 'active', 'completed'];
  filterSelected: allowedFilters;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.filterSelected = state.filter;
    })
  }

  changeFilter(newFilter: allowedFilters) {
    const setFilterAction = new SetFilterAction(newFilter);
    this.store.dispatch(setFilterAction);
  }

}
