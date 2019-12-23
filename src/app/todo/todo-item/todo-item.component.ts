import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ToggleTodoAction, EditTodoAction, DeleteTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputDom', {static: false}) txtInputDom: ElementRef

  chkField: FormControl;
  txtInput: FormControl;
  editing: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.chkField.valueChanges.subscribe(() => {
      const toggleTodoAction = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(toggleTodoAction);
    });
  }

  edit() {
    this.editing = true;
      setTimeout(() => {
        this.txtInputDom.nativeElement.select();
      }, 1);
  }

  endEdit() {
    this.editing = false;
    if (this.txtInput.valid && this.txtInput.value !== this.todo.text) {
      console.log(this.txtInput.value);
      const editTodoAction = new EditTodoAction(this.todo.id, this.txtInput.value);
      this.store.dispatch(editTodoAction);
    }
  }

  deleteTodo(){
    const deleteTodoAction = new DeleteTodoAction(this.todo.id);
    this.store.dispatch(deleteTodoAction);
  }

}
