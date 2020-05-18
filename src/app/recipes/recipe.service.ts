import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('Name 1', 'Desc 1', 'Img 1'),
        new Recipe('Name 2', 'Desc 2', 'Img 2')
    ];
    
    getRecipes() {
        // return this.recipes; // pass as reference
        return this.recipes.slice(); // pass as value
    }
}