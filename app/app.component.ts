import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="container">
  <h1>To-Do List</h1>
  <meal-list [mealList]="meals" (onMealSelect)="mealWasSelected($event)"></meal-list>
  </div>
  `
})//[mealList] takes all the html templatefrom the child (MealListComponent) = variable created from the instance the model in the AppComponent class

export class AppComponent {
  public meals: Meal[]; //create public var which is instance of the model
  constructor(){
    this.meals = [
      // new Meal("Create To-Do List app.", 0),
      // new Meal("Learn Kung Fu.", 1),
      // new Meal("Rewatch all the Lord of the Rings movies.", 2),
      // new Meal("Do the laundry.", 3)
    ]; // this array of meals can be prefilled meals or empty
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log('parent', clickedMeal);
  }
}
