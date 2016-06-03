import { Component } from 'angular2/core';
import { Task } from './task.model';

@Component({
    selector: 'task-display', //this selector is located in task-list.component
    inputs: ['task'], // this comes from task-list.component equal to currentTask
  template: `
  <div>
    <input *ngIf="task.done" type="checkbox" checked (click)="toggleDone(false)"/>
    <input *ngIf="!task.done" type="checkbox" (click)="toggleDone(true)"/>
    <label>{{ task.description }}</label>
  </div> <!-- toggleDone is defined below-->
  `
}) // false is checked because task ate instantiated as notDone,   public filterDone: string = "notDone"; from task-list.component

export class TaskComponent { // name of the class should be similar to the name of file
  public task: Task; // when we get the import of the task we need to define the public variable within the export class
  toggleDone(setState: boolean) {
    this.task.done = setState; //task.done is what we get returned from pipe
  }
}
