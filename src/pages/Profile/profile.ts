import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Home } from '../home/Home';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class Profile {
  images: Array<string>;  
  profileDetails: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.profileDetails = navParams.get("ProfileDetails");

    this.images =[];
    this.images.push("assets/CategoriesImg/app-icon.png");
    this.images.push("assets/CategoriesImg/bev-icon.png");
    this.images.push("assets/CategoriesImg/bread-icon.png");
    this.images.push("assets/CategoriesImg/breakfast-icon.png");
    this.images.push("assets/CategoriesImg/cocktails-icon.png");
    this.images.push("assets/CategoriesImg/dessert-icon.png");
    this.images.push("assets/CategoriesImg/fish-icon.png");
    this.images.push("assets/CategoriesImg/Meat-icon.png");
    this.images.push("assets/CategoriesImg/salad-icon.png");
  }
  
  MyRecipiesList(event, item) {
    this.navCtrl.push(Home, {
      PageName: "Profile",
      ProfileId: "564hdg546jf45"
    });
  } 
}
