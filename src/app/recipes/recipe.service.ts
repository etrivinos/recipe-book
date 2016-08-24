import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Dummy', 'Dummy', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRxB0tOdt9pf0gFkXU0TK2cOEioVjo2Za_MspENSadj0QcFjYmy', []),
    new Recipe('Dummy', 'Dummy', 'http://3k8rzg6jh5t1c4xc01udrwh1.wpengine.netdna-cdn.com/wp-content/uploads/2014/06/dsc_0954.jpg', [])
  ];

  constructor() {}

  getRecipes() {
    return this.recipes;
  }

}
