import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
    selector: 'meal-display', //this selector is located in meal-list.component
    inputs: ['meal'], // this comes from meal-list.component equal to currentMeal
  template: `
  <div>
    <p>{{ meal.name }}</p>
  </div>
  `
})

export class MealComponent {
  public meal: Meal;
  // toggleHealthy(setState: boolean) {
  //   this.meal.healthy = setState;
  // }
}
