import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3>Create New Meal:</h3>
    <input placeholder="Name" class="col-lg-8 input-lg" #newName>
    <button (click)="addMeal(newName)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement){
    this.onSubmitNewMeal.emit(userName.value);
    console.log(userName.value);
    userName.value = "";
  }
}
//Its picking up the values, but the onSubmitNewMeal emitter is only emitting the userName value, not the userDetails nor the userCalories.

//the edit-meal-details component is correctly updating the correct fields as it should because of the [(ngModel)]. Since we do not have the module created yet with the new-meal component, we cannot use the [(ngModel)] here and have to go with the emit.

//Approach 1.) We can go with this break in emission and have the user first create the module with a name, then add the details and calories later as an edit.

//Approach 2.) We can
