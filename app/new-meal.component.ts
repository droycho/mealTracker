import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <hr>
  <div class="add-form center">
    <h3>Create Meal</h3>
    <input placeholder="Name" class="input-lg" #newName required>
    <input placeholder="Details" class="input-lg" #newDetails required>
    <input placeholder="Calories" class="input-lg" #newCalories required>
    <br>
    <br>
  <button (click)="addMeal(newName, newDetails, newCalories)" class="btn btn-success">Add</button>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement){
    var name = userName.value;
    var details = userDetails.value;
    var calories = parseInt(userCalories.value);
    var meal = new Meal(name, details, calories, 0)
    // var meal = new Meal(userName.value, userDetails.value, parseInt(userCalories.value), 0);
    console.log(meal);
    this.onSubmitNewMeal.emit(meal);
    userName.value = "";
    userDetails.value = "";
    userCalories.value = "";
  }
}

//variable meal is picking up values, but it is not displaying as clickable link in the target.
