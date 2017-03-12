import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Home } from '../home/Home';

@Component({
  selector: 'page-cookbook',
  templateUrl: 'cookbook.html'
})
export class Cookbook {
  cookBook: Array<{Title: string, NoOfRecipies: number, ImageUrl: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.cookBook = [];
   this.cookBook.push({
			Title: 'Breakfast',
			NoOfRecipies: 2,
			ImageUrl: 'assets/CookBook/Breakfast.jpg'
		});
    this.cookBook.push({
			Title: 'Dessert',
			NoOfRecipies: 4,
			ImageUrl: 'assets/CookBook/Dessert.jpg'
		});
    this.cookBook.push({
			Title: 'Drinks',
			NoOfRecipies: 1,
			ImageUrl: 'assets/CookBook/Drinks.jpg'
		});
    this.cookBook.push({
			Title: 'Lunch',
			NoOfRecipies: 0,
			ImageUrl: 'assets/CookBook/Lunch.jpg'
		});
    this.cookBook.push({
			Title: 'Side Dish',
			NoOfRecipies: 5,
			ImageUrl: 'assets/CookBook/SideDish.jpg'
		});
    this.cookBook.push({
			Title: 'Snacks',
			NoOfRecipies: 6,
			ImageUrl: 'assets/CookBook/snacks.jpg'
		});
  } 

	CookBookClicked(event, item) {
    this.navCtrl.push(Home, {
      PageName: "CookBook",
      BookGroup: "item"
    });
  }
}
