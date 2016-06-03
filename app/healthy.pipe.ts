import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "healthy",
  pure: false
})
export class HealthyPipe implements PipeTransform {
  transform(input: Meal[], args) {

    var desiredHealthyState = args[0];
    if(desiredHealthyState === "healthy") {
      return input.filter((meal) => {
        if(meal.calories < 500) {
        return meal.healthy;}
      });
    } else if (desiredHealthyState === "notHealthy") {
      return input.filter((meal) => {
        if(meal.calories > 500) {
        return !meal.healthy;}
      });
    } else {
      return input;
    }
  }
}

//items will only show in healthy if check box is selected, however, will not show in unhealthy if calories are less than 500.
