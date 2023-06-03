import { Injectable } from '@angular/core';
import { Task } from '../components/day-list/day-list.component';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageUpdaterService {
  taskList: Task[] = [
    // {
    //   id: 1,
    //   header: 'first Task',
    //   description: 'first task description',
    //   active: true,
    //   onEdit: true,
    //   chacked: true,
    // },
    // {
    //   id: 2,
    //   header: 'second Task',
    //   description: 'second task description',
    //   active: true,
    //   onEdit: true,
    //   chacked: false,
    // },
    // {
    //   id: 3,
    //   header: 'third Task',
    //   description: 'third task description',
    //   active: true,
    //   onEdit: true,
    //   chacked: false,
    // },
  ];
  constructor() {}

  uploadToLocalStorage() {
    const actualLS = localStorage.getItem('todos');
    if (!actualLS) {
      return;
    } else {
      this.taskList = JSON.parse(actualLS);
    }
  }

  downloadToLocalStorage(taskList: Task) {
    localStorage.setItem('todos', JSON.stringify(taskList));
  }

  updateLocalStorage(taskList: Task) {
    localStorage.removeItem('todos');
    localStorage.setItem('todos', JSON.stringify(taskList));
  }
  saveTaskInLS(task: Task) {
    const actualLS = localStorage.getItem('todos');
    if (!actualLS) {
      return;
    } else {
      const newLS = JSON.parse(actualLS);
      const newTaskList = newLS.map((el: Task) => {
        if (el.id == task.id) {
          task.onEdit = false;
          return task;
        } else {
          return el;
        }
      });
      localStorage.setItem('todos', JSON.stringify(newTaskList));
    }
  }

  clearLS() {
    localStorage.setItem('todos', JSON.stringify([]));
  }
}
