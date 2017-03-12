import { Component } from '@angular/core';
import { NavController, NavParams,ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import { Camera, File, Transfer, FilePath } from 'ionic-native';

require('aws-sdk/dist/aws-sdk');
declare var cordova: any;

@Component({
  selector: 'page-createrecipie',
  templateUrl: 'createrecipie.html',
  
})
export class CreateRecipie {
  selectedItem: any;  
  noOfIngredents: number;
  ingredentsList: string[] = new Array("") ;
  recipieDirections: string[] = new Array("") ;
  CategoryTag: Array<{CategoryId: string, CategoryName: string}>;
  selectedCategory: string;
  CookingTypeTag: Array<{CookingTypeId: string, CookingTypeName: string}>;
  selectedCookingType: string;
  CusineTag: Array<{CusineTypeId: string, CusineTypeName: string}>;
  PhotosList: Array<{s3Url: string, isPrimary: boolean}>;
  context: any;
  selectedCusine: string;

  constructor(public navCtrl: NavController,public navParams: NavParams,public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController) {
    this.PhotosList=[];
    this.context=this;

    this.noOfIngredents = 0;  
    this.recipieDirections[0] = "";   
    this.CategoryTag = [];
	
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Breakfast'});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Lunch'});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Beverages'});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Appetizers'});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Soups'});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Salads'});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Main dishes: Beef'});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Main dishes: Poultry'});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Main dishes: Pork'});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Main dishes: Seafood'});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Main dishes: Vegetarian'});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Side dishes: Vegetables'});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Side dishes: Other'});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Desserts'});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Canning / Freezing'});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Breads'});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Holidays'});
    this.CategoryTag.push({CategoryId: '546g546sg', CategoryName: 'Entertaining'});

    this.CookingTypeTag = [];
	
    this.CookingTypeTag.push({CookingTypeId: '546g546sg', CookingTypeName: 'Baking'});
    this.CookingTypeTag.push({CookingTypeId: '546g546sg', CookingTypeName: 'Steaming'});
    this.CookingTypeTag.push({CookingTypeId: '546g546sg', CookingTypeName: 'Grilling'});
    this.CookingTypeTag.push({CookingTypeId: '546g546sg', CookingTypeName: 'Roasting'});
    this.CookingTypeTag.push({CookingTypeId: '546g546sg', CookingTypeName: 'Boiling'});
    this.CookingTypeTag.push({CookingTypeId: '546g546sg', CookingTypeName: 'Stewing'});
    this.CookingTypeTag.push({CookingTypeId: '546g546sg', CookingTypeName: 'Frying'});
    this.CookingTypeTag.push({CookingTypeId: '546g546sg', CookingTypeName: 'Shallow Frying'});
    this.CookingTypeTag.push({CookingTypeId: '546g546sg', CookingTypeName: 'Deep Frying'});
    this.CookingTypeTag.push({CookingTypeId: '546g546sg', CookingTypeName: 'Barbequing'});
    this.CookingTypeTag.push({CookingTypeId: '546g546sg', CookingTypeName: 'Basting'});

    this.CusineTag = [];
	
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Arabic'});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'American'});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'British'});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Caribbean'});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Chinese'});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'French'});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Greek'});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Indian'});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Italian'});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Japanese'});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Lebanese'});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Middle Eastern'});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Mediterranean'});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Mexican'});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Moroccan'});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Spanish'});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Thai'});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Turkish'});
    this.CusineTag.push({CusineTypeId: '546g546sg', CusineTypeName: 'Vietnamese'});
  } 

  changeIngredents(){    
    for(let i =0; i<this.noOfIngredents; i++){  
      this.ingredentsList[i] = "";
    }
  }
AddPhotos()
{
  this.PhotosList.push({s3Url: "assets/Images/BeefRoast.jpg", isPrimary: true});
}
  SaveRecipieDetails(){
    this.ingredentsList.splice(3, 1);
  }

  closeIngredent(i){
    this.ingredentsList.splice(i, 1);
    this.noOfIngredents = this.noOfIngredents - 1;
  }

  AddMoreSteps(){
    this.recipieDirections[this.recipieDirections.length] = "";
  }

  closeSteps(i){
    this.recipieDirections.splice(i, 1);
  }



  //////For s3 bucket upload
private presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(Camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(Camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }


 private takePicture(sourceType) {
  //Create options for the Camera Dialog
  var options = {
    quality: 10,
    sourceType: sourceType,
    saveToPhotoAlbum: false,
    correctOrientation: true,
    destinationType:Camera.DestinationType.DATA_URL
  };
 
  // Get the data of an image
  Camera.getPicture(options).then((imagePath) => {
    this.uploadImage(imagePath);
    
  }, (err) => {
    this.presentToast('Error while selecting image.');
  });
}



private presentToast(text) {
  let toast = this.toastCtrl.create({
    message: text,
    duration: 3000,
    position: 'top'
  });
  toast.present();
}
	uploadImage(images){
    let loading = this.loadingCtrl.create({
    content: 'Uploading image...'
  });
      loading.present();

        var AWSService = (<any>window).AWS;
          
///var image="data:image/gif;base64,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";
       // var file = fileInput.target.files[0];
  var buf = new Buffer(images.replace(/^data:image\/\w+;base64,/, ""),'base64')

        AWSService.config.accessKeyId = 'AKIAIH2OK4PTVBWOE4XQ';

        AWSService.config.secretAccessKey = 'dBNInJsWtzxKzgayhcfND3vff6U3oxwXY552dhqm';
        
        AWSService.config.signatureVersion= 'v4';
        var testData:any;
        var bucket = new AWSService.S3({params: {Bucket: 'zadapp'}});
var timestamp = new Date().getUTCMilliseconds();

        var params = {Key: "jjh"+timestamp+".jpeg", Body: buf, ContentEncoding: 'base64',
    ContentType: 'image/jpeg'};
      
        bucket.upload(params,  (err, data) =>{
        debugger;

    loading.dismiss();
          if(err)

this.presentToast("Error occured while uploading");
else
{
  this.presentToast("Upload successfull.");

    this.PhotosList.push({s3Url: data.Location, isPrimary: true});

}


        });   

    }
}
