import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Profile } from '../profile/Profile';

@Component({
  selector: 'page-followers',
  templateUrl: 'followers.html'
})
export class Followers {
 Followers: Array<{Name: string, Job: string, Status: string, ImageUrl:string}>;

 constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.Followers = [];
  this.Followers.push({
    Name: 'Finn',
    Job: 'Chef',
    Status: 'Listen, I have had a pretty messed up day...',
    ImageUrl: 'assets/img/avatar-finn.png'
  });		 
  this.Followers.push({
    Name: 'Han',
    Job: 'Chef',
    Status: 'I have got enough on my plate as it is, and I...',
    ImageUrl: 'assets/img/avatar-han.png'
  });	
  this.Followers.push({
    Name: 'Rey',
    Job: 'Recipie Professional',
    Status: 'You will remove these restraints and leave...',
    ImageUrl: 'assets/img/avatar-rey.png'
  });	
  this.Followers.push({
    Name: 'Luke',
    Job: 'Chef',
    Status: 'I feel the good in you, the conflict...',
    ImageUrl: 'assets/img/avatar-luke.png'
  });	
 }

 FollowersProfileClicked(event, item) {
    this.navCtrl.push(Profile, {
      ProfileDetails: item
    });
  }
}