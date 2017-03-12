import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { LanguageService } from '../service/language';

import { Home } from '../pages/home/Home';
import { Cookbook } from '../pages/cookbook/Cookbook';
import { Profile } from '../pages/profile/Profile';
import { Shoppinglist } from '../pages/shoppingList/Shoppinglist';
import { Categories } from '../pages/categories/Categories';
import { CreateProfile } from '../pages/CreateProfile/CreateProfile';
import { CreateRecipie } from '../pages/CreateRecipie/CreateRecipie';
import { Groups } from '../pages/Groups/Groups';



@Component({
  templateUrl: 'app.html',
  providers: [LanguageService]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public translate: TranslateService, public language: LanguageService) {
    this.initializeApp();    
    translate.setDefaultLang(language.getValue());

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'HELLO', component: Home },
      { title: 'Categories', component: Categories },
      { title: 'My Cookbook', component: Cookbook },
      { title: 'My Profile', component: Profile },
      { title: 'Shopping List', component: Shoppinglist },
      { title: 'Create Profile', component: CreateProfile },
      { title: 'Create Recipe', component: CreateRecipie },
      { title: 'Groups', component: Groups },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    this.language.setValue(lang)
  }
}
