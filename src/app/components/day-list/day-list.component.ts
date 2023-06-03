import { Component, OnInit } from '@angular/core';
import { LocalstorageUpdaterService } from '../../services/localstorage-updater.service';

export interface Task {
  id?: number;
  header: string;
  description?: string;
  active: boolean;
  onEdit: boolean;
  chacked: boolean;
}

@Component({
  selector: 'app-day-list',
  templateUrl: './day-list.component.html',
  styleUrls: ['./day-list.component.scss'],
})
export class DayListComponent implements OnInit {
  taskList: Task[] | any = [];
  constructor(public localstorageUpdaterService: LocalstorageUpdaterService) {}

  ngOnInit(): void {
    this.localstorageUpdaterService.uploadToLocalStorage();
    this.taskList = this.localstorageUpdaterService.taskList;
  }

  addNewTask(newTask: Task) {
    this.taskList.unshift(newTask);
    if (this.taskList) {
      this.localstorageUpdaterService.downloadToLocalStorage(this.taskList);
    }
  }
  deliteTaskFromList(id: number) {
    this.taskList = this.taskList.filter((el: Task) => el.id !== id);
    this.localstorageUpdaterService.updateLocalStorage(this.taskList);
  }
  saveTaskInList(task: Task) {
    this.localstorageUpdaterService.saveTaskInLS(task);
  }

  clearTaskList() {
    this.taskList = [];
  }
  doCheck(task: Task) {
    this.taskList.map((el: Task) => {
      if (task.id == el.id) {
        el.chacked = !el.chacked;
      }
    });
    this.localstorageUpdaterService.saveTaskInLS(task);
  }
}
