import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';

@Pipe({
  name: "done", //same word after "| done:filterDone" in task-list.component
  pure: false // this set to false in model
})
export class DonePipe implements PipeTransform {
  transform(input: Task[], args) {

    var desiredDoneState = args[0];
    if(desiredDoneState === "done") {
      return input.filter(function(task) { // this task is used in return statement
        return task.done; // return to task.component and will be checked inside the toggleDone
      });
    } else if (desiredDoneState === "notDone") {
      return input.filter((task) => {
        return !task.done;
      });
    } else {
      return input;
    }
  }
}
