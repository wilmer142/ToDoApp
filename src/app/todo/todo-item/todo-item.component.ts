import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);
  }

  edit(focus = true) {
    this.editing = focus;
    if (focus) {
      setTimeout(() => {
        this.txtInputDom.nativeElement.select();
      }, 1);
    }
  }

}
