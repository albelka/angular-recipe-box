import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe Box</h1>
    <ul>
      <li *ngFor="let currentRecipe of recipes">{{currentRecipe.title}} <button class="btn btn-info" (click)="editRecipe(currentRecipe)">Edit</button></li>
    </ul>
    <hr>
    <div *ngIf="selectedRecipe">
      <h3>{{selectedRecipe.title}}</h3>
      <h4>Edit Recipe</h4>
      <label>Recipe Title</label>
      <input [(ngModel)]="selectedRecipe.title">
      <br>
      <label>Ingredients</label>
      <input [(ngModel)]= "selectedRecipe.ingredients">
      <br>
      <label>Directions:</label>
      <input [(ngModel)]="selectedRecipe.directions">
      <br>
      <button class="btn btn-success" (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Cookies', 'salt', 'cook in oven'),
    new Recipe('Pancakes', 'eggs', 'cook in pan'),
    new Recipe('Fondue', 'nutmeg', 'cook in fondue pot'),
  ];

  selectedRecipe: Recipe = null;

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }

}

export class Recipe {
  constructor(public title: string, public ingredients: string, public directions: string) { }
}
