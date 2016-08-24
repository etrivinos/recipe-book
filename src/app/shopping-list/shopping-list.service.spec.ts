import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ShoppingListService } from './shopping-list.service';

describe('ShoppingList Service', () => {
  beforeEachProviders(() => [ShoppingListService]);

  it('should ...',
      inject([ShoppingListService], (service: ShoppingListService) => {
    expect(service).toBeTruthy();
  }));
});
