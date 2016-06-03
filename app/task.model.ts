export class Task {
  public done: boolean = false; // set the pure in pipe to false
  constructor(public description: string, public id: number) {
  } // in createTask inside task-list.component be sure to make sure the parameters match with constructor
}
