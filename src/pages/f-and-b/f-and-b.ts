import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { ServiceProvider } from '../../providers/service/service';
/**
 * Generated class for the FAndBPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-f-and-b',
  templateUrl: 'f-and-b.html',
})
export class FAndBPage {
	fAndB: any;
	ifFoodMenuSelected: boolean = true;
  ifDrinkMenuSelected: boolean = false;
  checkCourses: any = [];
  checkDrinks: any = [];
	selectedArray: any = [];
	ifDetailName: boolean =false;
	ifPhoto: boolean = true;
	ifFoodPairing: boolean = false;
	ifFoodImage: boolean = true;
	ifFoodDetails: boolean = false;

  food_pageNo = 1;
  drink_pageNo = 1;
  userId: any;
  sessionId: any;
  foodMenuArray: any = [];
  foodMenuLists: any = [];
  drinkMenuArray: any = [];
  drinkMenuLists: any = [];
  foodOutlets: any = [];
  drinkOutlets: any = [];
  public pagingEnabled: boolean = true;
  public pagingEnabled1: boolean = true;
  scroll: any;
  newfoods: any;
  newdrinks: any;
  courseId: any;
  drinkId: any;
  drinkString: any;
  courseString: any;
  foodoutletId: any;
  drinkoutletId: any;
  foodsearch: any;
  drinksearch: any;

  compare: boolean = false;
  drinkCompareLists: any = [];
  comparedDrink: any;
  dontcomparedDrink: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private storage: Storage, public serviceProvider: ServiceProvider) {
  	this.fAndB = 'foodmanu';
    this.fAndBStatusChange(this.fAndB);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FAndBPage');
    this.storage.get("userData").then(userData => {
      // console.log("userData breakage", userData);
      this.userId = userData.response.user_id;
      this.sessionId = userData.response.sessionId;
      this.getFoodMenu();
    });
  }

  fAndBStatusChange(fAndBname){
    if(fAndBname == "foodmanu"){
      console.log("foodmanu");
      this.ifFoodMenuSelected = true;
      this.ifDrinkMenuSelected = false;
      this.getFoodMenu();
    } else if(fAndBname == "drinkmenu"){
      console.log("drinkmenu");
      this.ifFoodMenuSelected = false;
      this.ifDrinkMenuSelected = true;
      this.scroll = "drinkmenu";
      this.drink_pageNo = 1;
      this.pagingEnabled1 = true;
      this.getDrinkMenu();
    } else {}
  }

  onfAndBChanged(event) {
    console.log("event", event.value);
    this.fAndBStatusChange(event.value);
  }

  sortedFoodData() {
    console.log("sortedFoodData");
    this.scroll = "foodmenu";
    this.food_pageNo = 1;
    this.pagingEnabled = true;
    let foodMenuObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "food_pageno": this.food_pageNo,
      "search_val": this.foodsearch,
      "outletval": this.foodoutletId,
      "category": this.courseString
    }
    this.serviceProvider.foodMenuApi(foodMenuObj).then(data => {
      if(data["success"] == 0){
      } else if(data["success"] == 1) {
        let foodData = data["response"];
        this.foodMenuArray = foodData.food;
        this.foodMenuLists = this.foodMenuArray;
        
      } else if(data["success"] == 2) {
        // this.error = data["message"];
      } else if(data['success'] == 4) {
        let alert = this.alertCtrl.create({
          subTitle: data["message"],
          cssClass: 'newsFeedAlertCss',
          buttons: [
            {
              text: 'OK',
              handler: () => {
                this.navCtrl.push("LoginPage");
              }
            }
          ]
        });
        alert.present();
      }else {
      }
    },
    err => {
      console.log("this.error" +JSON.stringify(err))
    });
  }

  sortedDrinkData() {
    this.scroll = "drinkmenu";
    this.drink_pageNo = 1;
    this.pagingEnabled1 = true;
    
    let drinkMenuObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "drink_pageno": this.drink_pageNo,
      "search_val": this.drinksearch,
      "outletval": this.drinkoutletId,
      "category": this.drinkString
    }
    // console.log('drink drinkMenuObj', drinkMenuObj);
    this.serviceProvider.drinkMenuApi(drinkMenuObj).then(data => {
      // console.log('drink drinkMenuApi', data);
      if(data["success"] == 0){
      } else if(data["success"] == 1) {
        let drinkData = data["response"];
        this.drinkMenuArray = drinkData.drink;
        this.drinkMenuLists = this.drinkMenuArray;
        
      } else if(data["success"] == 2) {
        // this.error = data["message"];
        // this.getDrinkMenu();
      } else if(data['success'] == 4) {
        let alert = this.alertCtrl.create({
          subTitle: data["message"],
          cssClass: 'newsFeedAlertCss',
          buttons: [
            {
              text: 'OK',
              handler: () => {
                this.navCtrl.push("LoginPage");
              }
            }
          ]
        });
        alert.present();
      }else {
      }
    },
    err => {
      console.log("this.error" +JSON.stringify(err))
    });
  }

  public onFoodOutletChange(foodoutlet): void {
    console.log('food foodoutlet', foodoutlet);
    this.foodoutletId = foodoutlet;
    this.sortedFoodData();
  }

  public onDrinkOutletChange(drinkoutlet): void {
    // console.log('drink drinkoutlet', drinkoutlet);
    this.drinkoutletId = drinkoutlet;
    this.sortedDrinkData();
  }

  filterFoodItems(ev: any) {
    let val = ev.target.value;
    // console.log("food val", val)
    this.foodsearch = val;
    if (this.foodsearch && this.foodsearch.trim() != '') {
      this.foodMenuLists = this.foodMenuArray.filter((item) => {
          return ((item.item_name.toLowerCase().indexOf(this.foodsearch.toLowerCase()) > -1) || (item.smaller_price.toLowerCase().indexOf(this.foodsearch.toLowerCase()) > -1));
      });
    } else if(this.foodsearch == '' || this.foodsearch == undefined){
      this.foodMenuLists = this.foodMenuArray;
    }

    this.sortedFoodData();
  }

  filterDrinkItems(ev: any) {
  
    let val1 = ev.target.value;
    this.drinksearch = val1;
    if (this.drinksearch && this.drinksearch.trim() != '') {
      this.drinkMenuLists = this.drinkMenuArray.filter((item) => {
          return ((item.name.toLowerCase().indexOf(this.drinksearch.toLowerCase()) > -1));
      });
    } else if(this.drinksearch == '' || this.drinksearch == undefined){
      this.drinkMenuLists = this.drinkMenuArray;
    }

    this.sortedDrinkData();
  }

  selectCourse(course) {
    console.log("selectCourse");
    if (course.isChecked == true) {
      this.selectedArray.push(course);
    } else {
      let newArray = this.selectedArray.filter(function(el) {
        return el.id !== course.id;
      });
      this.selectedArray = newArray;
    }

    Array.prototype.map.call(this.selectedArray, s => s.id).toString(); // "A,B,C"
    this.courseString = Array.prototype.map.call(this.selectedArray, s => s.id).toString();

  	this.sortedFoodData();
  }

  getFoodMenu() {
    console.log("getFoodMenu");
    this.scroll = "foodmenu";
    let foodMenuObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "food_pageno": this.food_pageNo,
      "search_val": this.foodsearch,
      "outletval": this.foodoutletId,
      "category": this.courseString
    }
    // console.log("foodMenuObj", foodMenuObj);
    this.serviceProvider.foodMenuApi(foodMenuObj).then(data => {
      // console.log("foodMenuApi" +JSON.stringify(data));
      if(data["success"] == 0){
      } else if(data["success"] == 1) {
        let foodData = data["response"];
        this.foodOutlets = foodData.outlet;
        // console.log("food this.foodOutlets", this.foodOutlets);
        this.checkCourses = foodData.category;
        this.foodMenuArray = foodData.food;
        this.foodMenuLists = this.foodMenuArray;
       
      } else if(data["success"] == 2) {
        // this.error = data["message"];
        // this.getDrinkMenu();
      } else if(data['success'] == 4) {
        let alert = this.alertCtrl.create({
          subTitle: data["message"],
          cssClass: 'newsFeedAlertCss',
          buttons: [
            {
              text: 'OK',
              handler: () => {
                this.navCtrl.push("LoginPage");
              }
            }
          ]
        });
        alert.present();
      }else {
      }
    },
    err => {
      console.log("this.error" +JSON.stringify(err))
    });
  }

  doInfinite(infiniteScroll) {
    this.scroll = "foodmenu";
    this.food_pageNo = this.food_pageNo+1;

    let foodMenuObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "food_pageno": this.food_pageNo,
      "search_val": this.foodsearch,
      "outletval": this.foodoutletId,
      "category": this.courseString
    }
    
    setTimeout(() => {
      this.serviceProvider.foodMenuApi(foodMenuObj).then(data => {
        let obj: any = data;
        if (obj.response.food.length) {
          for(let i in obj.response.food) {
            this.newfoods = obj.response.food[i];
            this.foodMenuArray.push(this.newfoods)
          }
        } else {
            this.pagingEnabled = false;
            this.food_pageNo = this.food_pageNo-1;
        }
      });

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  selectDrink(drink) {
    console.log('drink', drink);
    this.drinkCompareLists = [];
    if (drink.isChecked == true) {
      this.selectedArray.push(drink);
    } else {
      let newArray = this.selectedArray.filter(function(el) {
        return el.id !== drink.id;
      });
      this.selectedArray = newArray;
    }
    Array.prototype.map.call(this.selectedArray, s => s.id).toString(); // "A,B,C"
    this.drinkString = Array.prototype.map.call(this.selectedArray, s => s.id).toString();
    
    this.sortedDrinkData();
  }

  getDrinkMenu() {
    this.scroll = "drinkmenu";
    // console.log("getFoodMenu");
    let drinkMenuObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "drink_pageno": this.drink_pageNo,
      "search_val": this.drinksearch,
      "outletval": this.drinkoutletId,
      "category": this.drinkString
    }
    // console.log("drinkMenuObj", drinkMenuObj);
    this.serviceProvider.drinkMenuApi(drinkMenuObj).then(data => {
      if(data["success"] == 0){
        // this.error = data["message"];
      } else if(data["success"] == 1) {
        // this.error = '';
        let drinkData = data["response"];
        this.drinkOutlets = drinkData.outlet;
        // console.log("drink this.drinkOutlets", this.drinkOutlets);
        this.checkDrinks = drinkData.category;
        this.drinkMenuArray = drinkData.drink;
        this.drinkMenuLists = this.drinkMenuArray;
        
      } else if(data["success"] == 2) {
        // this.error = data["message"];
      } else if(data['success'] == 4) {
        let alert = this.alertCtrl.create({
          subTitle: data["message"],
          cssClass: 'newsFeedAlertCss',
          buttons: [
            {
              text: 'OK',
              handler: () => {
                this.navCtrl.push("LoginPage");
              }
            }
          ]
        });
        alert.present();
      }else {
      }
    },
    err => {
      console.log("this.error" +JSON.stringify(err))
    });
  }

  doInfinite1(infiniteScroll) {
    this.scroll = "drinkmenu";
    this.drink_pageNo = this.drink_pageNo+1;

    let drinkMenuObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "drink_pageno": this.drink_pageNo,
      "search_val": this.drinksearch,
      "outletval": this.drinkoutletId,
      "category": this.drinkString
    }
    setTimeout(() => {
      this.serviceProvider.drinkMenuApi(drinkMenuObj).then(data => {
        let obj: any = data;
        if (obj.response.drink.length) {
          for(let i in obj.response.drink) {
            this.newdrinks = obj.response.drink[i];
            this.drinkMenuArray.push(this.newdrinks)
          }
        } else {
            this.pagingEnabled1 = false;
        }
      });

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  desertDetail() {
  	console.log("desertDetail");
  	this.ifDetailName = true;
  }
  closeDetail() {
  	console.log("desertDetail");
  	this.ifDetailName = false;
  }
  selectPhoto() {
  	console.log("select photo");
  	this.ifPhoto = false;
    this.ifFoodPairing = true;
    this.ifFoodImage = false;
    this.ifFoodDetails = true;
  }

  selectFoodPairing() {
  	console.log("select food pairing");
  	this.ifPhoto = true;
    this.ifFoodPairing = false;
    this.ifFoodImage = true;
    this.ifFoodDetails = false;
  }

  compareThreeWines(drink, index) {
  	console.log("compare wines", drink);
    this.compare = true;
    if(this.drinkCompareLists.length < 3) {
      this.comparedDrink = drink;
      let index = this.drinkMenuLists.indexOf(drink);
      if(index > -1){
        this.drinkMenuLists.splice(index, 1);
      }
      this.drinkCompareLists.push(this.comparedDrink);
    } 
  }

  dontCompareThreeWines(drink, index) {
    console.log("don't compare wines", drink);
    if(this.drinkCompareLists.length > 0) {
      this.dontcomparedDrink = drink;
      let index = this.drinkCompareLists.indexOf(drink);
      if(index > -1){
        this.drinkCompareLists.splice(index, 1);
      }
      this.drinkMenuLists.push(this.dontcomparedDrink);
    } 
  }

}
