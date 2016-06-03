import {Component} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'edit-task-details', //inside task-list.component
  inputs: ['task'], // this comes from task-list.component equal to selectedTask
  template: `
  <div class="task-form">
    <h3>Edit Description: </h3>
    <input [(ngModel)]="task.description" class="col-lg-8 input-lg task-form">
  </div>
  `
})
export class EditTaskDetailsComponent {
  public task: Task; // when we get the import of the task we need to define the public variable within the export class
}
