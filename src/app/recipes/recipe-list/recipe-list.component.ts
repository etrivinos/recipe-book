import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives: [RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Dummy', 'Dummy', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRxB0tOdt9pf0gFkXU0TK2cOEioVjo2Za_MspENSadj0QcFjYmy', []),
    new Recipe('Dummy', 'Dummy', 'http://3k8rzg6jh5t1c4xc01udrwh1.wpengine.netdna-cdn.com/wp-content/uploads/2014/06/dsc_0954.jpg', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
