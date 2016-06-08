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
      return input.filter(function(meal) {
        return meal.calories < 500;
      });
    } else if (desiredHealthyState === "notHealthy") {
      return input.filter(function(meal){
        return meal.calories > 500;
      });
    } else {
      return input;
    }
  }
}
// export class HealthyPipe implements PipeTransform {
//   transform(mealList: Meal[], allTheColonSeparatedValues) {
//
//     var menuChoice = allTheColonSeparatedValues[0];
//     if(menuChoice === "healthy") { //if the user wants meals < 500 calories
//       return //an array of all meals we want to see (<500)
//     } else if (menuChoice === "notHealthy") {
//       return //an array of all meals >500 calories
//     } else { //if they hit "show all" instead of healthy/not healthy.
//       return mealList; //return all meals in an array, unchanged.
//     }
//   }
// }

//items will only show in healthy if check box is selected, however, will not show in unhealthy if calories are less than 500.
