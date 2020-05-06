import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Name 1', 'Desc 1', 'Img 1'),
    new Recipe('Name 2', 'Desc 2', 'Img 2')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
