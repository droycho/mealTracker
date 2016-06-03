export class Meal {
  public healthy: boolean = false; // set the pure in pipe to false
  constructor(public name: string, public details: string, public calories: number, public id: number) {
  } // in createMeal inside meal-list.component be sure to make sure the parameters match with constructor
}
