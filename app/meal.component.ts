import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
    selector: 'meal-display',
    inputs: ['meal'],
  template: `
  <div class="container">
    <div>
      <h3 (click)="mealClicked(meal)" [class.selected]="selectedMeal === meal">{{meal.name}}</h3>
      <ul *ngIf="selectedMeal === meal">
        <li>Name: {{meal.name}}</li>
        <li>Details: {{meal.details}}</li>
        <li>Calories: {{meal.calories}}</li>
      </ul>
    </div>
  </div>
  `
})

export class MealComponent {
  public meal: Meal;
}
