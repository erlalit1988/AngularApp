import { Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.acouplecooks.com/wp-content/uploads/2019/11/Recipes-Header-1-800x400.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://www.acouplecooks.com/wp-content/uploads/2019/11/Recipes-Header-1-800x400.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
