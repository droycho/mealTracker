import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3>Create Meal:</h3>
    <input placeholder="Name" class="col-lg-8 input-lg" #newName>
    <input placeholder="Details" class="col-lg-8 input-lg" #newDetails>
    <input placeholder="Calories" class="col-lg-8 input-lg" #newCalories>
    <button (click)="addMeal(newName, newDetails, newCalories)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement){
    this.onSubmitNewMeal.emit(userName.value),
    this.onSubmitNewMeal.emit(userDetails.value),
    this.onSubmitNewMeal.emit(userCalories.value);
    userName.value = "",
    userDetails.value = "",
    userCalories.value = "";
  }
}
