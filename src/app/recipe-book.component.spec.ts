import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { RecipeBookAppComponent } from '../app/recipe-book.component';

beforeEachProviders(() => [RecipeBookAppComponent]);

describe('App: RecipeBook', () => {
  it('should create the app',
      inject([RecipeBookAppComponent], (app: RecipeBookAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'recipe-book works!\'',
      inject([RecipeBookAppComponent], (app: RecipeBookAppComponent) => {
    expect(app.title).toEqual('recipe-book works!');
  }));
});
