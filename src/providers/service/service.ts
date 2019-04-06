import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from "@ionic/storage";
import moment from 'moment';
/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let apiUrl = 'https://apolloshine.com/hoscom/webservices/';
@Injectable()
export class ServiceProvider {
	token: any;
	headers = new Headers({ "Content-Type": "application/json" });
  constructor(public http: Http, private storage: Storage) {
    console.log('Hello ServiceProvider Provider');
    storage.get("token").then(token => {
      this.token = token;
      if (token) {
        this.headers.append('Access-Control-Allow-Origin', '*');
        this.headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        this.headers.append('Accept', 'application/json');
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        this.headers.append('Content-Type', 'application/json');
        // this.headers.append('Content-Type','multipart/form-data');
        this.headers.append("Authorization", token);
      }
    });
  }

  // This api is used for sign up in application.
  signupApi(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'signup.php', JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
            resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used for login in application.
  loginApi(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'login.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used for forgot Password in application.
  forgotPasswordApi(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'forgotPassword.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to create newsfeed in application.
  createNewsfeedApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'add_newsfeed.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to display newsfeed in application.
  displayNewsfeedApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'newsfeed.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to display single newsfeed in application.
  singlefeedApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'singlefeed.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to add comment in application.
  addcommentApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'add_comment.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to get list of user in application.
  userListApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'userlist.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to add private message in application.
  addPrivateMessageApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'add_private_message.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to get list of private message in application.
  displayPrivateMessageApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'privatemessage.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to read nesfeed in application.
  readNewsfeedApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'newsfeed_read.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to read private message in application.
  readPrivateMessageApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'privatemessage_read.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to get all department in application.
  allDepartmentApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'all_department.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to get all groups in application.
  allGroupsApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'all_group.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to display maintenance list in application.
  displayMaintenanceApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'maintanance.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to add new maintenance in application.
  addMaintenanceApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'add_maintanance.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to get all current lost n found list in application.
  currentLostNFoundApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'current_lost_found.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to get all archive lost n found list in application.
  archiveLostNFoundApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'archive_lost_found.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to return and restore lost n found list in application.
  returnLostNFoundApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'lost_found_return-restore.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to add new lost n found in application.
  addLostNFoundApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'add_lost_found.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to add new notes in application.
  addNotesApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'add_notes.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to delete notes from list list in application.
  deleteNotesApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'notes_del-restore.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to get current notes list in application.
  currentNotesApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'current_notes.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to get archive notes list in application.
  archiveNotesApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'archive_notes.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to display cleaning plans list in application.
  displayCleaningPlanApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'cleaningplan.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to update cleaning plan from list in application.
  updateCleaningPlanApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'update_cleaning_status.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to display brakage list in application.
  displayBreakageApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'breakage.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to delete breakage from list in application.
  deleteBreakageApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'delete_breakage.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to add breakage in application.
  addBreakageApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'add_breakage.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to display breakage glass products list in application.
  breakageGlassProductsApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'breakage_glass_product.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to display breakage china products list in application.
  breakageChinaProductsApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'breakage_china_product.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to display breakage wine products list in application.
  breakageWineProductsApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'breakage_dring_product.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to log out from the app.
  logOutApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'logout.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to get food menu list of hotel.
  foodMenuApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'my_department_food.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to get drink menu list of hotel.
  drinkMenuApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'my_department_drink.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to get requisition all wine data of hotel.
  wineRequisitionApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'drink_requision.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to add wine order of hotel.
  addWineOrderApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'add_wine_order.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to show number of items in cart of hotel.
  cartTableApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'cart.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to remove cart item from order list modal of hotel.
  removecartItemApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'remove_cart_item.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to place order of hotel.
  orderApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'order.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to get previous order of hotel.
  previousOrderApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'previous_order.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to get allocation list of hotel.
  allocationListApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'allocationlist.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to add event of hotel.
  addEventApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'add_event.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to get event list of hotel.
  eventListApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'calender_event.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to get event list of hotel.
  updateUserProfileApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'update_user.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

  // This api is used to update user profile of hotel.
  changePasswordApi(data) {
    //console.log("data", data);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + 'change_password.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
            reject(err);
        });
    });
  }

}
