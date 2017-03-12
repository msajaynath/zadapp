import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})


export class Search {
	//searchFilter: any;
	callback: any;
	CategoryTag: Array<{CategoryId: string, CategoryName: string, IsSelected: boolean}>;
  CookingTypeTag: Array<{CookingTypeId: string, CookingTypeName: string, IsSelected: boolean}>;
  CusineTag: Array<{CusineTypeId: string, CusineTypeName: string, IsSelected: boolean}>;
	Time: Array<{TimeId: string, TimeName: string}>;
	Calories: Array<{CaloriesId: string, CaloriesName: string}>;

	SelectedTime : string;
	SelectedCalories: string;
	SelectedCategories: string[];
	SelectedCusine: string[];
	SelectedCookingType: string[];

	SelectedList: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.SelectedList = "Time";
		this.Time = [];
		this.Time.push({TimeId: '546gvn546sg', TimeName: 'less than 15min'});
		this.Time.push({TimeId: '546g54hfgh6sg', TimeName: 'less than 30min'});
		this.Time.push({TimeId: '546g5rh46sg', TimeName: 'less than 45min'});
		this.Time.push({TimeId: '546gghej546sg', TimeName: 'less than 60min'});
		this.Time.push({TimeId: '546ghfd546sg', TimeName: 'less than 905min'});
		this.Time.push({TimeId: '546gvd546sg', TimeName: 'less than 120min'});

		this.Calories = [];
		this.Calories.push({CaloriesId: '546gtwu546sg', CaloriesName: '0 to 80cal'});
		this.Calories.push({CaloriesId: '546g5ghk46sg', CaloriesName: '80 to 150cal'});
		this.Calories.push({CaloriesId: '54mv6g546sg', CaloriesName: '150 to 220cal'});
		this.Calories.push({CaloriesId: '54yuk6g546sg', CaloriesName: '220 to 350cal'});
		this.Calories.push({CaloriesId: '546fjg546sg', CaloriesName: '350 to 500cal'});
		this.Calories.push({CaloriesId: '546g5agh46sg', CaloriesName: '500 to 750cal'});
		this.Calories.push({CaloriesId: '546gotyi546sg', CaloriesName: 'Above 750cal'});


		this.CategoryTag = [];
	
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Breakfast', IsSelected:false});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Lunch', IsSelected:false});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Beverages', IsSelected:false});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Appetizers', IsSelected:false});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Soups', IsSelected:false});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Salads', IsSelected:false});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Main dishes: Beef', IsSelected:false});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Main dishes: Poultry', IsSelected:false});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Main dishes: Pork', IsSelected:false});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Main dishes: Seafood', IsSelected:false});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Main dishes: Vegetarian', IsSelected:false});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Side dishes: Vegetables', IsSelected:false});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Side dishes: Other', IsSelected:false});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Desserts', IsSelected:false});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Canning / Freezing', IsSelected:false});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Breads', IsSelected:false});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Holidays', IsSelected:false});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Entertaining', IsSelected:false});

    this.CookingTypeTag = [];
	
    this.CookingTypeTag.push({CookingTypeId: '546g546sg', CookingTypeName: 'Baking', IsSelected:false});
    this.CookingTypeTag.push({CookingTypeId: '546g546sg', CookingTypeName: 'Steaming', IsSelected:false});
    this.CookingTypeTag.push({CookingTypeId: '546g546sg', CookingTypeName: 'Grilling', IsSelected:false});
    this.CookingTypeTag.push({CookingTypeId: '546g546sg', CookingTypeName: 'Roasting', IsSelected:false});
    this.CookingTypeTag.push({CookingTypeId: '546g546sg', CookingTypeName: 'Boiling', IsSelected:false});
    this.CookingTypeTag.push({CookingTypeId: '546g546sg', CookingTypeName: 'Stewing', IsSelected:false});
    this.CookingTypeTag.push({CookingTypeId: '546g546sg', CookingTypeName: 'Frying', IsSelected:false});
    this.CookingTypeTag.push({CookingTypeId: '546g546sg', CookingTypeName: 'Shallow Frying', IsSelected:false});
    this.CookingTypeTag.push({CookingTypeId: '546g546sg', CookingTypeName: 'Deep Frying', IsSelected:false});
    this.CookingTypeTag.push({CookingTypeId: '546g546sg', CookingTypeName: 'Barbequing', IsSelected:false});
    this.CookingTypeTag.push({CookingTypeId: '546g546sg', CookingTypeName: 'Basting', IsSelected:false});

    this.CusineTag = [];
	
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Arabic', IsSelected:false});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'American', IsSelected:false});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'British', IsSelected:false});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Caribbean', IsSelected:false});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Chinese', IsSelected:false});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'French', IsSelected:false});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Greek', IsSelected:false});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Indian', IsSelected:false});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Italian', IsSelected:false});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Japanese', IsSelected:false});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Lebanese', IsSelected:false});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Middle Eastern', IsSelected:false});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Mediterranean', IsSelected:false});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Mexican', IsSelected:false});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Moroccan', IsSelected:false});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Spanish', IsSelected:false});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Thai', IsSelected:false});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Turkish', IsSelected:false});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Vietnamese', IsSelected:false});
  }  

	RefineSearchSave() {
		this.SelectedCategories = [];
		this.SelectedCusine = [];
		this.SelectedCookingType = [];

		for(let  i =0; i<this.CategoryTag.length; i++){
			if(this.CategoryTag[i].IsSelected)
				this.SelectedCategories.push(this.CategoryTag[i].CategoryName)
		}
		for(let  i =0; i<this.CookingTypeTag.length; i++){
			if(this.CookingTypeTag[i].IsSelected)
				this.SelectedCusine.push(this.CookingTypeTag[i].CookingTypeName)
		}
		for(let  i =0; i<this.CusineTag.length; i++){
			if(this.CusineTag[i].IsSelected)
				this.SelectedCookingType.push(this.CusineTag[i].CusineTypeName)
		}

		let searchfilter = new searchFilter(this.SelectedTime,	this.SelectedCalories,	this.SelectedCategories,
																				this.SelectedCusine,	this.SelectedCookingType);

			/*this.navParams.get('showConfirm')(this.searchFilter); 
		this.navCtrl.pop();*/

		this.callback = this.navParams.get("showConfirm")

		this.callback(searchfilter).then(()=>{
				this.navCtrl.pop();
		});
		
	}

	SearchItemClick(selectedList){
		this.SelectedList = selectedList;
	}
}

export class searchFilter {
	Time :string;
	Calories :string;
	Categories : string[];
	Cusine : string[];
	CookingType : string[];
	constructor(Time: string, Calories: string, Categories:string[], Cusine: string[], CookingType: string[]) {
		this.Time = Time;
		this.Calories = Calories;
		this.Categories = Categories;
		this.Cusine = Cusine;
		this.CookingType = CookingType;
	}
}
