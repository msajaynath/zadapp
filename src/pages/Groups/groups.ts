import { Component } from '@angular/core';
import { Followers } from '../followers/Followers';
import { Following } from '../following/Following';

@Component({
	selector: 'page-groups',
  templateUrl: 'groups.html'
})
export class Groups {

  tab1Root: any;
  tab2Root: any;

  constructor() {
    this.tab1Root = Followers;
    this.tab2Root = Following;
  }
}