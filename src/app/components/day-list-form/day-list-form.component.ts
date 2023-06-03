import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../day-list/day-list.component';
import { LocalstorageUpdaterService } from '../../services/localstorage-updater.service';

@Component({
  selector: 'app-day-list-form',
  templateUrl: './day-list-form.component.html',
  styleUrls: ['./day-list-form.component.scss'],
})
export class DayListFormComponent implements OnInit {
  @Output() onAdd: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() onClear: EventEmitter<Task> = new EventEmitter<Task>();

  title = '';
  text = '';

  constructor(public localstorageUpdaterService: LocalstorageUpdaterService) {}

  ngOnInit(): void {}

  addTask() {
    if (this.title.trim() && this.text.trim()) {
      const task: Task = {
        id: Date.now(),
        header: this.title,
        description: this.text,
        active: false,
        onEdit: false,
        chacked: false,
      };

      this.onAdd.emit(task);

      this.title = this.text = '';
    }
  }

  clearTaskList() {
    this.localstorageUpdaterService.clearLS();
    this.onClear.emit();
  }
}
