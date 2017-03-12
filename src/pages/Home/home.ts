import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { RecipieDetails } from '../recipiedetails/RecipieDetails';
import { FavouriteList } from '../favouritelist/FavouriteList'
import { Search } from '../search/Search'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
  Recipies: Array<{RecipieName: string, RecipieDetailedName: string, RecipieDescription: string, TimeRequired: string, ImageURL: string}>;
	pageName:any;
	category: any;
	bookGroup: any;
	profileDetails: any;
	IsSearchClicked: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public translate: TranslateService) {
		this.IsSearchClicked = false;
		this.pageName = navParams.get("PageName");
		if(this.pageName == "Categories"){
			this.category = navParams.get("Category");
			this.Recipies = [];
	
			this.Recipies.push({
				RecipieName: 'Chat',
				RecipieDetailedName: 'Indian ChaT Baji',
				RecipieDescription: 'It is a traditional and classic dish of north indians mosly eat with 4 P.M coffee',
				TimeRequired : '15 MIN',
				ImageURL: 'assets/images/Chat.jpg'
			});
			this.Recipies.push({
				RecipieName: 'Chicken',
				RecipieDetailedName: 'Chicken 65 with grooves',
				RecipieDescription: 'Its a spicy dish which can be used with Appom or butter nan or chappathi',
				TimeRequired : '65 MIN',
				ImageURL: 'assets/images/Chicken.jpg'
			});
		}
		else if(this.pageName == "CookBook"){
			this.bookGroup = navParams.get("BookGroup");
			this.Recipies = [];
			
			this.Recipies.push({
				RecipieName: 'Pan Cakes',
				RecipieDetailedName: 'Pan cakes stuffed with paneer',
				RecipieDescription: 'This recipe has served me well for years. Whenever we have overnight company, everyone insists these are the best pancakes',
				TimeRequired : '25 MIN',
				ImageURL: 'assets/images/PanCakes.jpg'
			});
			this.Recipies.push({
				RecipieName: 'Beef',
				RecipieDetailedName: 'Beef Ulathiyathu with Cocunut peels',
				RecipieDescription: 'This is my best dish that i love to have with rice. If  have this i dont want anything else to eat with',
				TimeRequired : '25 MIN',
				ImageURL: 'assets/images/BeefRoast.jpg'
			});	
		}
		else if(this.pageName == "Profile"){
			this.Recipies = [];
			this.Recipies.push({
				RecipieName: 'Pan Cakes',
				RecipieDetailedName: 'Pan cakes stuffed with paneer',
				RecipieDescription: 'This recipe has served me well for years. Whenever we have overnight company, everyone insists these are the best pancakes',
				TimeRequired : '25 MIN',
				ImageURL: 'assets/images/PanCakes.jpg'
			});
			this.Recipies.push({
				RecipieName: 'Chat',
				RecipieDetailedName: 'Indian ChaT Baji',
				RecipieDescription: 'It is a traditional and classic dish of north indians mosly eat with 4 P.M coffee',
				TimeRequired : '15 MIN',
				ImageURL: 'assets/images/Chat.jpg'
			});
		}
		else{
			this.Recipies = [];
    
			this.Recipies.push({
				RecipieName: 'Chat',
				RecipieDetailedName: 'Indian ChaT Baji',
				RecipieDescription: 'It is a traditional and classic dish of north indians mosly eat with 4 P.M coffee',
				TimeRequired : '15 MIN',
				ImageURL: 'assets/images/Chat.jpg'
			});
			this.Recipies.push({
				RecipieName: 'Chicken',
				RecipieDetailedName: 'Chicken 65 with grooves',
				RecipieDescription: 'Its a spicy dish which can be used with Appom or butter nan or chappathi',
				TimeRequired : '65 MIN',
				ImageURL: 'assets/images/Chicken.jpg'
			});
			this.Recipies.push({
				RecipieName: 'Pan Cakes',
				RecipieDetailedName: 'Pan cakes stuffed with paneer',
				RecipieDescription: 'This recipe has served me well for years. Whenever we have overnight company, everyone insists these are the best pancakes',
				TimeRequired : '25 MIN',
				ImageURL: 'assets/images/PanCakes.jpg'
			});
			this.Recipies.push({
				RecipieName: 'Beef',
				RecipieDetailedName: 'Beef Ulathiyathu with Cocunut peels',
				RecipieDescription: 'This is my best dish that i love to have with rice. If  have this i dont want anything else to eat with',
				TimeRequired : '25 MIN',
				ImageURL: 'assets/images/BeefRoast.jpg'
			});	
		}
  } 

	itemTapped(event, item) {
    this.navCtrl.push(RecipieDetails, {
      item: item
    });
  }

  presentPopover() {
    let popover = this.popoverCtrl.create(FavouriteList);
    popover.present();
  }

	myCallbackFunction = (params) => {
     return new Promise((resolve, reject) => {
			 alert(JSON.stringify(params));
				this.Recipies = [];

				this.Recipies.push({
					RecipieName: 'Chat',
					RecipieDetailedName: 'Indian ChaT Baji',
					RecipieDescription: 'It is a traditional and classic dish of north indians mosly eat with 4 P.M coffee',
					TimeRequired : '15 MIN',
					ImageURL: 'assets/images/Chat.jpg'
				});
				resolve();
     });
	}

  RefineSearchPopover() {
    this.navCtrl.push(Search, {
        showConfirm: this.myCallbackFunction
    });
  }

	SearchClick(){
		this.IsSearchClicked = true;
	}
}
