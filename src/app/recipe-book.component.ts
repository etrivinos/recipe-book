import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes';
import { ShoppingListComponent } from './shopping-list';
import { RecipeService } from './recipes';

@Component({
	moduleId: module.id,
  selector: 'recipe-book-app',
  templateUrl: 'recipe-book.component.html',
  styleUrls: ['recipe-book.component.css'],
  directives: [HeaderComponent, RecipesComponent, ShoppingListComponent],
  providers: [RecipeService]
})
export class RecipeBookAppComponent {
}
