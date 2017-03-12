import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Profile } from '../profile/Profile';

@Component({
  selector: 'page-recipiedetails',
  templateUrl: 'recipiedetails.html'
})
export class RecipieDetails {
  recipieDetails = {RecipieName: "Mysore Burfi", RecipieImageUrl: "assets/images/burfi.jpg",RecipieCurrentRating: 4.5, 
                    RecipieMyRating:5, RecipieDetailedName: "A dash of cocunut",
                    RecipieMaker:"Joe Doe", RecipieReview: [],
                    RecipieDirections: [], RecipieIngredients: [], RecipieImages: []}
  subDirection: any;                  
  directions: Array<{subDirection: any}>;
  selectedServe: number;
  previousServe: number;
  directionStyle : string;
  ButtonContent : string;
  rate: number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rate = 4;
    this.directionStyle = "hideContent";
    this.ButtonContent = "Show Directions";
    this.selectedServe = 2;
    this.previousServe = 2;

    this.recipieDetails.RecipieReview.push({ReviewerName : "Tom Joe", ReviewerImage: 'assets/img/avatar-finn.png', ReviewerDate : "2 weeks ago", ReviewerRating: 3.5, ReviewerComments: "So delicious kaju burfi. Everyone can make a try. Its too good to eat"})
    this.recipieDetails.RecipieReview.push({ReviewerName : "Philip Joe", ReviewerImage: 'assets/img/avatar-han.png', ReviewerDate : "10 days ago", ReviewerRating: 4, ReviewerComments: "Its finger licking good. All my friends enjoyed a lot. Absolute awesome"})

    this.recipieDetails.RecipieImages.push("assets/images/burfi1.jpg")
    this.recipieDetails.RecipieImages.push("assets/images/burfi2.jpg")
    this.recipieDetails.RecipieImages.push("assets/images/burfi2.jpg")
    this.recipieDetails.RecipieImages.push("assets/images/burfi2.jpg")
    this.recipieDetails.RecipieImages.push("assets/images/burfi3.jpg")
    this.recipieDetails.RecipieImages.push("assets/images/burfi4.jpg")
    this.recipieDetails.RecipieImages.push("assets/images/burfi5.jpg")
    this.recipieDetails.RecipieImages.push("assets/images/burfi5.jpg")
    this.recipieDetails.RecipieImages.push("assets/images/burfi5.jpg")

    this.recipieDetails.RecipieDirections.push("Take the heavy bottom pan and heat the milk over high flame. \nSqueeze the lemons or add the lime juice and stir the milk continually for 5 minutes.")
    this.recipieDetails.RecipieDirections.push("Curd will form slowly when the milk is heated at high temperature. \nIt forms when the milk fat separates from the whey. When the milk is boiled, drain the whey and filter the pure milk with help of strainer.")
    this.recipieDetails.RecipieDirections.push("The formed curd should be wrapped in the cloth and rinsed before using. \nRinse and squeeze well the muslin cloth which wraps the curd.")
    this.recipieDetails.RecipieDirections.push("Add oil in the frying pan and heat it over the high flame. Melt the butter. \nAdd milk powder and mix well. After stirring well add the curd. Cook the mixture on a high flame till it forms a soft dough. Keep stirring for 12 minutes at intervals to form proper")
    this.recipieDetails.RecipieDirections.push("When the dough, i.e. khoya is prepared, turn off the flame and let the mixture rest in the pan till it cools. \nOnce it is cooled, transfer it to the large mixing bowl and let it rest till it take the room temperature.")
    this.recipieDetails.RecipieDirections.push("To this bowl, add cardamom powder and sugar. Knead the dough with soft hands to blend the ingredients with dough.")
    this.recipieDetails.RecipieDirections.push("Take the rectangular or square-shaped plates, apply oil or grease it gently and insert the Barfi mixture. \nCut the small cubes of Barfi, each of equal size.")

    this.recipieDetails.RecipieIngredients = [
    '0.5 kg of Wheat',
    '2 teaspoon of valila essence',
    '0.25 kg of sugar',
    '1 pealed cocunut',
    '50 gram of butter',
    '1 pinch of salt'
    ];

    this.directions = [];
    for(let i=0; i<this.recipieDetails.RecipieDirections.length;i++)
    {
      if(this.recipieDetails.RecipieDirections[i].includes("\n"))
      {
        this.subDirection = [];
        var step = this.recipieDetails.RecipieDirections[i].split("\n");
        for(let j=0; j<step.length;j++){
          this.subDirection.push({Text: step[j]});
        }    
        this.directions.push({
          subDirection:this.subDirection 
        }) 
      }
      else{
        this.directions.push({
          subDirection:[{
            Text: this.recipieDetails.RecipieDirections[i]
          }]
        })
      }
    }
  }

  onServeNumberChange(newValue){
    for(let i=0; i<this.recipieDetails.RecipieIngredients.length;i++)
    {
      let initialServingUnit = Number(this.recipieDetails.RecipieIngredients[i].replace(/[^0-9\.]+/g,""));
      let newUnit = (newValue * initialServingUnit)/this.previousServe;
      this.recipieDetails.RecipieIngredients[i] = this.recipieDetails.RecipieIngredients[i].replace(initialServingUnit, newUnit);
    }    
    this.previousServe = newValue;
  }

  StylingClick(){
    if(this.ButtonContent == "Show Directions"){
      this.directionStyle = "showContent";
      this.ButtonContent = "Hide Directions";
    }
    else{
      this.directionStyle = "hideContent";
      this.ButtonContent = "Show Directions";
    }
  }

  RecipieOwnerClick(event, profileId) {
    this.navCtrl.push(Profile, {
      ProfileDetails: profileId
    });
  }
}
