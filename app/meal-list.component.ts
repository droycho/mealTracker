import { Component, EventEmitter } from 'angular2/core';
import { NewMealComponent } from './new-meal.component';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import {EditMealDetailsComponent} from './edit-meal-details.component';
import {HealthyPipe} from './healthy.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  pipes: [HealthyPipe],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all" selected="selected">Show All</option>
    <option value="healthy">Show Healthy</option>
    <option value="notHealthy">Show Not Healthy</option>
  </select>
  <br>
  <meal-display *ngFor="#currentMeal of mealList | healthy:filterHealthy"
    (click)="mealClicked(currentMeal)"
    [meal]="currentMeal">
  </meal-display>
  <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
  </edit-meal-details>
  <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterHealthy: string = "notHealthy";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(meal: Meal): void {
  this.mealList.push(meal);
  console.log("added new meal");
  console.log(this.mealList)
  }
  onChange(filterOption) {
    this.filterHealthy = filterOption;
  }
}
