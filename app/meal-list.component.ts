import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import {EditMealDetailsComponent} from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import {HealthyPipe} from './healthy.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],//input comes from app.component (parent)
  outputs: ['onMealSelect'], // output goes to app.component (parent), we make the bridge with .emit below
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  pipes: [HealthyPipe],
  template: `
  <select (change)="onChange($event.target.value)" class="filter"> <!--creating onChange below and changing the default value of the Healthy boolean variable -->
    <option value="all">Show All</option>
    <option value="healthy">Show Healthy</option>
    <option value="notHealthy" selected="selected">Show Not Healthy</option>
  </select>
  <meal-display *ngFor="#currentMeal of mealList | healthy:filterHealthy"
    (click)="mealClicked(currentMeal)"
    [class.selected]="currentMeal === selectedMeal"
    [meal]="currentMeal"> <!-- class.selected is changing the color and referencing in css/ click is output and mealClicked is defined below/ meal is an input going to meal.component-->
  </meal-display> <!--meal-display is receiving info from meal.component -->
  <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
  </edit-meal-details> <!-- infor goes to edit-meal-details.component  -->
  <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})

export class MealListComponent { // name of the class should be similar to the name of file
  public mealList: Meal[]; //mealList is creating an array of Meal
  // when we get the import of the mealList we need to define the public variable within the export class
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal; //selectedMeal is creating a type of Meal
  public filterHealthy: string = "notHealthy"; // our pipe modify this value and we use it inside onChange
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void { //when meal is clicked , selectedMeal inherets the value from clicked meal which is type of meal

    this.selectedMeal = clickedMeal; //selectedMeal is used inside edit-meal-details tag and meal-display for changing the color
    this.onMealSelect.emit(clickedMeal); // "onMealSelect" the output of our page going to another component
  }
  createMeal(name: string, details: string, calories: number): void {
  this.mealList.push(
    new Meal(name, details, calories, this.mealList.length)
  );//pushing new instance of name to the mealList array by creating new obj of Meal with desc and id, and this should meet the parameters of the model constructor
  }
  onChange(filterOption) {
    this.filterHealthy = filterOption;

  }
}
