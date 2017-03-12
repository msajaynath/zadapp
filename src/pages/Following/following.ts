import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Profile } from '../profile/Profile';

@Component({
  selector: 'page-following',
  templateUrl: 'following.html'
})
export class Following {
  
 Followings: Array<{Name: string, Job: string, Status: string, ImageUrl:string}>;

 constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.Followings = [];
  this.Followings.push({
    Name: 'Yoda',
    Job: 'Chef',
    Status: 'Do or do not. There is no try...',
    ImageUrl: 'assets/img/avatar-yoda.png'
  });		 
  this.Followings.push({
    Name: 'Leia',
    Job: 'Chef',
    Status: 'I have placed information vital to the survival...',
    ImageUrl: 'assets/img/avatar-leia.png'
  });	
  this.Followings.push({
    Name: 'Ben',
    Job: 'Recipie Professional',
    Status: 'These arent the droids you are looking for..',
    ImageUrl: 'assets/img/avatar-ben.png'
  });	
  this.Followings.push({
    Name: 'Poe',
    Job: 'Chef',
    Status: 'I just upgraded my X-Wing. Next time...',
    ImageUrl: 'assets/img/avatar-poe.png'
  });	
 }

 FollowingProfileClicked(event, item) {
    this.navCtrl.push(Profile, {
      ProfileDetails: item
    });
  }
}