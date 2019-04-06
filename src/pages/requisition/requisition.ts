import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ToastController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { ServiceProvider } from '../../providers/service/service';
/**
 * Generated class for the RequisitionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-requisition',
  templateUrl: 'requisition.html',
})
export class RequisitionPage {
	requisition: any;
	ifWineMenuSelected: boolean = true;
  ifNonfoodMenuSelected: boolean = false;
  ifOfficeMenuSelected: boolean = false;
  ifLaundryMenuSelected: boolean = false;
  outofOrder: boolean = false;
  ifAllOrder: boolean = true;
	ifOutOrder: boolean = false;
	wineArray: any = [];
	wineLists: any;
  checkWines: any = [];
  outofWines: any = [];
  quantity: any;
  public sum : number = 0;
  
  userId: any;
  sessionId: any;
  all_pageNo = 1;
  out_order_pageNo = 1;
  allrequsearch: any;
  outofrequsearch: any;
  selectedArray: any = [];
  drinkString: any;
  public pagingEnabled: boolean = true;
  public pagingEnabled1: boolean = true;
  newrequi: any;
  scroll: any;
  outofArray: any = [];
  outofLists: any;
  outrequi: any;
  total: any;
  outofString: any;
  inputModel: any;
  itemId: any;
  itemquntity: any;
  getquantity: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private alertCtrl: AlertController, private storage: Storage, 
    public serviceProvider: ServiceProvider, public toastCtrl: ToastController) {
  	this.requisition = 'wine';
    this.scroll = "allorder";
    this.sum = 0;
    this.requisitionChange(this.requisition);
    this.checkWines = [{'id': 1, 'name': 'Red Wine', 'isChecked': false}, {'id': 2, 'name': 'White Wine', 'isChecked': false}];
    this.outofWines = [{'id': 1, 'name': 'Red Wine', 'isChecked': false}, {'id': 2, 'name': 'White Wine', 'isChecked': false}];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequisitionPage');
    this.storage.get("userData").then(userData => {
      // console.log("userData breakage", userData);
      this.userId = userData.response.user_id;
      this.sessionId = userData.response.sessionId;
      this.getRequisitionData();
    });
  }

  filterItems(ev: any) {
    // Reset items back to all of the items
    console.log("ev.target.value" ,ev.target.value);
    let val = ev.target.value;
    this.allrequsearch = val;
    if (val && val.trim() != '') {
      console.log("wineArray" ,this.wineArray);
      this.wineLists = this.wineArray.filter((item) => {
        console.log("get items item...", item);
          return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });

    } else if(val == ''){
      this.wineLists = this.wineArray;
    }

    this.sortedDrinkRequiData();
  }
  filterOutofItems(ev: any) {
    // Reset items back to all of the items
    console.log("ev.target.value" ,ev.target.value);
    let val1 = ev.target.value;
    this.outofrequsearch = val1;
    if (val1 && val1.trim() != '') {
      console.log("outofArray" ,this.outofArray);
      this.outofLists = this.outofArray.filter((item) => {
        console.log("get items item...", item);
          return ((item.name.toLowerCase().indexOf(val1.toLowerCase()) > -1));
      });

    } else if(val1 == ''){
      this.outofLists = this.outofArray;
    }
    this.sortedOutofDrinkRequiData();
  }

  sortedDrinkRequiData() {
    this.scroll = "allorder";
    this.all_pageNo = 1;
    this.pagingEnabled = true;
    
    let drinkMenuObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "all_pageno": this.all_pageNo,
      "search_val": this.allrequsearch,
      "category": this.drinkString
    }
    // console.log('drink drinkMenuObj', drinkMenuObj);
    this.serviceProvider.wineRequisitionApi(drinkMenuObj).then(data => {
      console.log('drink drinkMenuApi sorted', data);
      if(data["success"] == 0){
      } else if(data["success"] == 1) {
        this.wineArray =  data["response"].all_drink;
        this.wineLists = this.wineArray;
        console.log("this.wineLists", this.wineLists);
        // this.sum = data["response"].total;
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

  sortedOutofDrinkRequiData() {
    this.scroll = "outoforder";
    this.out_order_pageNo = 1;
    this.pagingEnabled1 = true;
    
    let drinkMenuObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "out_order_pageno": this.out_order_pageNo,
      "search_val": this.outofrequsearch,
      "category": this.outofString
    }
    // console.log('drink drinkMenuObj', drinkMenuObj);
    this.serviceProvider.wineRequisitionApi(drinkMenuObj).then(data => {
      // console.log('drink drinkMenuApi', data);
      if(data["success"] == 0){
      } else if(data["success"] == 1) {
        this.outofArray =  data["response"].out_of_order;
        this.outofLists = this.outofArray;
        console.log("this.outofLists", this.outofLists);
        // this.sum = data["response"].total;
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

  selectDrinkRequi(drink) {
    console.log('drink', drink);
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
    
    this.sortedDrinkRequiData();
    // this.sortedOutofDrinkRequiData();
  }

  selectOutofDrinkRequi(outof) {
    console.log('outof', outof);
    if (outof.isChecked == true) {
      this.selectedArray.push(outof);
    } else {
      let newArray = this.selectedArray.filter(function(el) {
        return el.id !== outof.id;
      });
      this.selectedArray = newArray;
    }
    Array.prototype.map.call(this.selectedArray, s => s.id).toString(); // "A,B,C"
    this.outofString = Array.prototype.map.call(this.selectedArray, s => s.id).toString();
    
    this.sortedOutofDrinkRequiData();
  }

  getRequisitionData() {
    // console.log("get requisition data");
    let drinkRequiObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "all_pageno": this.all_pageNo,
      "search_val": this.allrequsearch,
      "out_order_pageno": this.out_order_pageNo,
      "category": this.drinkString
    }
    // console.log("drinkRequiObj", drinkRequiObj);
    this.serviceProvider.wineRequisitionApi(drinkRequiObj).then(data => {
      // console.log('wineRequisitionApi', data);
      if(data["success"] == 0){
        // this.error = data["message"];
      } else if(data["success"] == 1) {
        // this.error = '';
        this.wineArray =  data["response"].all_drink;
        this.wineLists = this.wineArray;
        console.log("this.wineLists", this.wineLists);

        this.outofArray =  data["response"].out_of_order;
        this.outofLists = this.outofArray;
        console.log("this.outofLists", this.outofLists);
        if(data["response"].total == null || data["response"].total == undefined || data["response"].total == '') {
          this.sum = 0;
        } else {
          this.sum = data["response"].total;
        }

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

  doInfinite(infiniteScroll) {
    this.scroll = "allorder";
    this.all_pageNo = this.all_pageNo+1;
    
    let drinkRequiObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "all_pageno": this.all_pageNo,
      "search_val": this.allrequsearch,
      "category": this.drinkString
    }
    
    setTimeout(() => {
      this.serviceProvider.wineRequisitionApi(drinkRequiObj).then(data => {
        let obj: any = data;
        
        console.log('obj.response', obj.response);
        console.log('obj.response.length', obj.response.length);
        // if (obj.response !== []) {
          // this.sum = obj.response.total;
          if (obj.response.all_drink) {
            for(let i in obj.response.all_drink) {
              this.newrequi = obj.response.all_drink[i];
              this.wineArray.push(this.newrequi);
              // this.wineLists = this.wineArray;
            }
          } else {
            this.pagingEnabled = false;
            
            this.all_pageNo = this.all_pageNo-1;
            // console.log('this.all_pageNo', this.all_pageNo);
          }
        
      });

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  doInfinite1(infiniteScroll) {
    this.scroll = "outoforder";
    this.out_order_pageNo = this.out_order_pageNo+1;

    let drinkRequiObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "out_order_pageno": this.out_order_pageNo,
      "search_val": this.allrequsearch,
      "category": this.outofString
    }
    
    setTimeout(() => {
      this.serviceProvider.wineRequisitionApi(drinkRequiObj).then(data => {
        let obj: any = data;
        // this.sum = obj.response.total;
        // if (obj.response !== []) {
          // this.sum = obj.response.total;
          if (obj.response.out_of_order) {
            for(let i in obj.response.out_of_order) {
              this.outrequi = obj.response.out_of_order[i];
              this.outofArray.push(this.outrequi);
              // this.outofLists = this.outofArray;
            }
          } else {
            this.pagingEnabled1 = false;
            // this.sum = obj.response.total;
            this.out_order_pageNo = this.out_order_pageNo-1;
           
        }
        
      });

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  requisitionChange(requisition){
    if(requisition == "wine"){
      console.log("wine");
      this.ifWineMenuSelected = true;
      this.ifNonfoodMenuSelected = false;
      this.ifOfficeMenuSelected = false;
      this.ifLaundryMenuSelected = false;
      // this.scroll = "allorder";
    } else if(requisition == "nonfood"){
      console.log("nonfood");
      this.ifWineMenuSelected = false;
      this.ifNonfoodMenuSelected = true;
      this.ifOfficeMenuSelected = false;
      this.ifLaundryMenuSelected = false;

    } else if(requisition == "office"){
      console.log("office");
      this.ifWineMenuSelected = false;
      this.ifNonfoodMenuSelected = false;
      this.ifOfficeMenuSelected = true;
      this.ifLaundryMenuSelected = false;
      
    } else if(requisition == "laundry"){
      console.log("laundry");
      this.ifWineMenuSelected = false;
      this.ifNonfoodMenuSelected = false;
      this.ifOfficeMenuSelected = false;
      this.ifLaundryMenuSelected = true;
      
    } else {}
  }

  onRequisitionChanged(event) {
    console.log("event", event.value);
    this.requisitionChange(event.value);
  }

  

  selectAllorder() {
  	console.log("select all order");
    this.scroll = "outoforder";
  	this.ifAllOrder = false;
    this.ifOutOrder = true;
    this.outofOrder = true;
    this.getRequisitionData();
  }

  selectOutorder() {
  	console.log("select out order");
    this.scroll = "allorder";
  	this.ifAllOrder = true;
    this.ifOutOrder = false;
    this.outofOrder = false;
    this.sortedDrinkRequiData();
  }

  gotoPreviousOrder() {
  	console.log("previous order");
  	this.navCtrl.push("PreviousOrderPage", {'reqType': this.requisition});
  }

  incDecApiData(wineid, quantity) {
    console.log("this.requisition inc", this.requisition);
    let incObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "item_id": wineid,
      "type": this.requisition,
      "item_quantity": quantity
    }

    this.serviceProvider.addWineOrderApi(incObj).then(data => {
      // console.log('addWineOrderApi', data);
      if(data["success"] == 0){
        // this.error = data["message"];
      } else if(data["success"] == 1) {
        let toastSuccess = this.toastCtrl.create({
          message: data["message"],
          duration: 1000,
          position: 'top',
          showCloseButton:true,
          closeButtonText:'X',
          cssClass: "toast-success",
        });
        toastSuccess.present();
        this.itemId = data["response"].item_id;
        this.itemquntity = data["response"].item_quantity;
        if(data["response"].total == null) {
          this.sum = 0;
        } else {
          this.sum = data["response"].total;
        }
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

  incrementQty(wine:any){
    console.log("increment wine", wine);
    if(this.itemId == wine.id) {
      wine.quantity = this.itemquntity;
    } else {
      wine.quantity = wine.quantity;
    }
    wine.quantity++;
    this.incDecApiData(wine.id, wine.quantity);
  }

  decrementQty(wine:any){
    console.log("decrement wine", wine);
    if(this.itemId == wine.id) {
      wine.quantity = this.itemquntity;
    } else {
      wine.quantity = wine.quantity;
    }
    if(wine.quantity-1 < 1) {
      wine.quantity = 0;
    } else {
      wine.quantity -= 1;
    }
    this.incDecApiData(wine.id, wine.quantity);

  }

  toSeeOrderLists() {
    console.log("to see order list");
    // console.log("req typr cart order", this.requisition);
    let orderListModal = this.modalCtrl.create("OrderListModalPage", {'reqType': this.requisition});
    orderListModal.present();
    orderListModal.onDidDismiss(data => {
      console.log(data);
    });
  }

  goBack() {
    this.navCtrl.push("MyDepartmentPage");
  }

  onChange(ev, outof){
    console.log("ev", ev.target.value);
    this.inputModel = ev.target.value;
    console.log("outof", outof);
    let incObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "item_id": outof.id,
      "type": this.requisition,
      "item_quantity": ev.target.value
    }

    console.log("incObj", incObj);
    this.serviceProvider.addWineOrderApi(incObj).then(data => {
      console.log('addWineOrderApi', data);
      if(data["success"] == 0){
        // this.error = data["message"];
      } else if(data["success"] == 1) {
        this.itemId = data["response"].item_id;
        this.itemquntity = data["response"].item_quantity;
        if(data["response"].total == null) {
          this.sum = 0;
        } else {
          this.sum = data["response"].total;
        }
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

}
