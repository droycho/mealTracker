import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
    selector: 'meal-display', //this selector is located in meal-list.component
    inputs: ['meal'], // this comes from meal-list.component equal to currentMeal
  template: `
  <div>
  <p>Select a meal blow to add details for a calorie value to the meal entry, or modify its details. If the meal has lass than 500 calories, click the box to mark it as healthy.</p>
    <input *ngIf="meal.healthy" type="checkbox" checked (click)="toggleHealthy(false)"/>
    <input *ngIf="!meal.healthy" type="checkbox" (click)="toggleHealthy(true)"/>
    <label>{{ meal.name }}</label>
  </div> <!-- toggleHealthy is defined below-->
  `
}) // false is checked because meal ate instantiated as notHealthy,   public filterHealthy: string = "notHealthy"; from meal-list.component

export class MealComponent { // name of the class should be similar to the name of file
  public meal: Meal; // when we get the import of the meal we need to define the public variable within the export class
  toggleHealthy(setState: boolean) {
    this.meal.healthy = setState; //meal.healthy is what we get returned from pipe
  }
}
