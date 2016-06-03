import { Component, EventEmitter } from 'angular2/core';
import { TaskComponent } from './task.component';
import { Task } from './task.model';
import {EditTaskDetailsComponent} from './edit-task-details.component';
import { NewTaskComponent } from './new-task.component';
import {DonePipe} from './done.pipe';

@Component({
  selector: 'task-list',
  inputs: ['taskList'],//input comes from app.component (parent)
  outputs: ['onTaskSelect'], // output goes to app.component (parent), we make the bridge with .emit below
  directives: [TaskComponent, EditTaskDetailsComponent, NewTaskComponent],
  pipes: [DonePipe],
  template: `
  <select (change)="onChange($event.target.value)" class="filter"> <!--creating onChange below and changing the default value of the Done boolean variable -->
    <option value="all">Show All</option>
    <option value="done">Show Done</option>
    <option value="notDone" selected="selected">Show Not Done</option>
  </select>
  <task-display *ngFor="#currentTask of taskList | done:filterDone"
    (click)="taskClicked(currentTask)"
    [class.selected]="currentTask === selectedTask"
    [task]="currentTask"> <!-- class.selected is changing the color and referencing in css/ click is output and taskClicked is defined below/ task is an input going to task.component-->
  </task-display> <!--task-display is receiving info from task.component -->
  <edit-task-details *ngIf="selectedTask" [task]="selectedTask">
  </edit-task-details> <!-- infor goes to edit-task-details.component  -->
  <new-task (onSubmitNewTask)="createTask($event)"></new-task>
  `
})

export class TaskListComponent { // name of the class should be similar to the name of file
  public taskList: Task[]; //taskList is creating an array of Task
  // when we get the import of the taskList we need to define the public variable within the export class
  public onTaskSelect: EventEmitter<Task>;
  public selectedTask: Task; //selectedTask is creating a type of Task
  public filterDone: string = "notDone"; // our pipe modify this value and we use it inside onChange
  constructor() {
    this.onTaskSelect = new EventEmitter();
  }
  taskClicked(clickedTask: Task): void { //when task is clicked , selectedTask inherets the value from clicked task which is type of task

    this.selectedTask = clickedTask; //selectedTask is used inside edit-task-details tag and task-display for changing the color
    this.onTaskSelect.emit(clickedTask); // "onTaskSelect" the output of our page going to another component
  }
  createTask(description: string): void {
  this.taskList.push(
    new Task(description, this.taskList.length)
  );//pushing new instance of description to the taskList array by creating new obj of Task with desc and id, and this should meet the parameters of the model constructor
  }
  onChange(filterOption) {
    this.filterDone = filterOption;

  }
}
