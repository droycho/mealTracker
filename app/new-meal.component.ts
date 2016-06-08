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
    // var name = userName.value;
    // var details = userDetails.value;
    // var calories = parseInt(userCalories.value);
    // var id = 0;
    var meal = new Meal(userName.value, userDetails.value, parseInt(userCalories.value), 0);
    this.onSubmitNewMeal.emit(meal);
    userName.value = "";
    userDetails.value = "";
    userCalories.value = "";
  }

}




//   template: `
//   <div class="meal-form">
//     <h3>Create New Meal:</h3>
//     <input placeholder="Name" class="col-lg-8 input-lg" #newName>
//     <button (click)="addMeal(newName)" class="btn-success btn-lg add-button">Add</button>
//   </div>
//   `
// })
// export class NewMealComponent {
//   public onSubmitNewMeal: EventEmitter<String>;
//   constructor(){
//     this.onSubmitNewMeal = new EventEmitter();
//   }
//   addMeal(userName: HTMLInputElement){
//     this.onSubmitNewMeal.emit(userName.value);
//     console.log(userName.value);
//     userName.value = "";
//   }
// }
//Its picking up the values, but the onSubmitNewMeal emitter is only emitting the userName value, not the userDetails nor the userCalories.

//the edit-meal-details component is correctly updating the correct fields as it should because of the [(ngModel)]. Since we do not have the module created yet with the new-meal component, we cannot use the [(ngModel)] here and have to go with the emit.

//Approach 1.) We can go with this break in emission and have the user first create the module with a name, then add the details and calories later as an edit.

//Approach 2.) We can
