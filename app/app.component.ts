import { Component, EventEmitter } from 'angular2/core';
import { TaskListComponent } from './task-list.component';
import { Task } from './task.model';

@Component({
  selector: 'my-app',
  directives: [TaskListComponent],
  template: `
  <div class="container">
  <h1>To-Do List</h1>
  <task-list [taskList]="tasks" (onTaskSelect)="taskWasSelected($event)"></task-list>
  </div>
  `
})//[taskList] takes all the html templatefrom the child (TaskListComponent) = variable created from the instance the model in the AppComponent class

export class AppComponent {
  public tasks: Task[]; //create public var which is instance of the model
  constructor(){
    this.tasks = [
      // new Task("Create To-Do List app.", 0),
      // new Task("Learn Kung Fu.", 1),
      // new Task("Rewatch all the Lord of the Rings movies.", 2),
      // new Task("Do the laundry.", 3)
    ]; // this array of tasks can be prefilled tasks or empty
  }
  taskWasSelected(clickedTask: Task): void {
    console.log('parent', clickedTask);
  }
}
