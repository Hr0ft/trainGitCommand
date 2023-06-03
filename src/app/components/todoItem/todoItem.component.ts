import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../day-list/day-list.component';
import { FormControl, FormGroup } from '@angular/forms';
import { LocalstorageUpdaterService } from 'src/app/services/localstorage-updater.service';

@Component({
  selector: 'app-todoItem',
  templateUrl: './todoItem.component.html',
  styleUrls: ['./todoItem.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() deleteTask: EventEmitter<number> = new EventEmitter<number>();
  @Output() saveTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() checkedTask: EventEmitter<Task> = new EventEmitter<Task>();

  form: FormGroup = new FormGroup({});

  constructor(public localstorageUpdaterService: LocalstorageUpdaterService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(this.task.header, {}),
      description: new FormControl(this.task.description, {}),
    });
  }

  onEdit(task: Task) {
    task.onEdit = !task.onEdit;
  }

  onDelete(id: number | undefined) {
    this.deleteTask.emit(id);
  }

  onChecked(task: Task) {
    this.checkedTask.emit(this.task);
  }

  submit() {
    const formData: any = { ...this.form.value };

    this.task.header = formData.title;
    this.task.description = formData.description;

    this.saveTask.emit(this.task);
    2;
  }
}
