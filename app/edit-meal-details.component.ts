import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal-details', //inside meal-list.component
  inputs: ['meal'], // this comes from meal-list.component equal to selectedMeal
  template: `
  <div class="meal-form">
    <h2>View {{meal.name}}:</h2>
    <p>Meal Name: {{meal.name}}</p>
    <p>Details: {{meal.details}}</p>
    <p>Calories: {{meal.calories}} cal.</p>

    <h3>Edit Name: </h3>
    <input [(ngModel)]="meal.name" class="col-lg-8 input-lg meal-form">
    <h3>Add/Edit Details: </h3>
    <input [(ngModel)]="meal.details" class="col-lg-8 input-lg meal-form">
    <h3>Add/Edit Calories: </h3>
    <input [(ngModel)]="meal.calories" class="col-lg-8 input-lg meal-form">
  </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal; // when we get the import of the meal we need to define the public variable within the export class
}
