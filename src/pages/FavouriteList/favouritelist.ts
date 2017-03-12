import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-favouritelist',
  templateUrl: 'favouritelist.html'
})
export class FavouriteList {
  MyCookBook: Array<{CookBookId: string, CookBookName: string}>;
  IsNewCookBookClicked: boolean;
  NewcookBookName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.IsNewCookBookClicked = false;
    this.MyCookBook = [];
    this.MyCookBook.push({CookBookId: "h65454fgh", CookBookName: "Breakfast"})
    this.MyCookBook.push({CookBookId: "fjf65jg564", CookBookName: "Dessert"})
    this.MyCookBook.push({CookBookId: "r654fg654", CookBookName: "Drinks"})
    this.MyCookBook.push({CookBookId: "dhg8gh54", CookBookName: "Lunch"})
    this.MyCookBook.push({CookBookId: "rt654fhg5", CookBookName: "Side Dish"})
    this.MyCookBook.push({CookBookId: "tygf5gh5", CookBookName: "Snacks"})
  }

  AddNewCookBook(){
    this.IsNewCookBookClicked = true;
  }

  ExistingCookBookClick(){

  }

  NewCookBookClicked(){
    alert(this.NewcookBookName)
  }
}
