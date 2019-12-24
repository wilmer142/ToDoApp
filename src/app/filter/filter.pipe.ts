import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import { allowedFilters } from './filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: allowedFilters): Todo[] {
    
    switch (filter) {
      case 'completed':
          return todos.filter(x => x.completed);

      case 'active':
          return todos.filter(x => !x.completed);
    
      default:
        return todos;
    }
  }

}
