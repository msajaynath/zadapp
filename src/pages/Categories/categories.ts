import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Home } from '../home/Home';

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})
export class Categories {
  Categories: Array<{CategoryId: string, CategoryName: string, ImageURL: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Categories =[];
    this.Categories.push({"CategoryId": "4g5dsg5dfh54fd", "CategoryName": "Appitizer", "ImageURL": "assets/CategoriesImg/app-icon.png"});
    this.Categories.push({"CategoryId": "fd5h4fd5h4fddh", "CategoryName": "Beverages", "ImageURL":"assets/CategoriesImg/bev-icon.png"});
    this.Categories.push({"CategoryId": "fg5j4f4g5jfg5j4", "CategoryName": "Bread", "ImageURL":"assets/CategoriesImg/bread-icon.png"});
    this.Categories.push({"CategoryId": "4g5dsg5dfh54fd", "CategoryName": "Breakfast", "ImageURL":"assets/CategoriesImg/breakfast-icon.png"});
    this.Categories.push({"CategoryId": "4g5dsg5dfh54fd", "CategoryName": "Cocktails", "ImageURL":"assets/CategoriesImg/cocktails-icon.png"});
    this.Categories.push({"CategoryId": "4g5dsg5dfh54fd", "CategoryName": "Dessert", "ImageURL":"assets/CategoriesImg/dessert-icon.png"});
    this.Categories.push({"CategoryId": "4g5dsg5dfh54fd", "CategoryName": "Fish", "ImageURL":"assets/CategoriesImg/fish-icon.png"});
    this.Categories.push({"CategoryId": "4g5dsg5dfh54fd", "CategoryName": "Meat", "ImageURL":"assets/CategoriesImg/Meat-icon.png"});
    this.Categories.push({"CategoryId": "4g5dsg5dfh54fd", "CategoryName": "Salad", "ImageURL":"assets/CategoriesImg/salad-icon.png"});
   } 

  CategoryClicked(event, item) {
    this.navCtrl.push(Home, {
      PageName: "Categories",
      Category: "item"
    });
  }
}
