import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Content, AlertController, Platform } from 'ionic-angular';
import { ScrollableTabs } from '../../components/scrollable-tabs/scrollable-tabs';
import { ServiceProvider } from '../../providers/service/service';
import { Storage } from "@ionic/storage";
import { Loader } from "../../providers/loader/loader";
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
/**
 * Generated class for the NewsFeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-feed',
  templateUrl: 'news-feed.html',
})
export class NewsFeedPage {

  tabsColor: string = "default";
  
  generaldetail: any = [];
  restaurantdetail: any = [];
  dinnerdetail: any = [];
  othersdetail: any = [];
  privatemessagedetail: any = [];
  ifGeneralSelected: boolean = true;
  ifRestaurantSelected: boolean = false;
  ifDinnerSelected: boolean = false;
  ifOthersSelected: boolean = false;
  ifPrivateMessageSelected: boolean = false;
  newsfeed: any;

  ifisNotPrivate: boolean = false;
  ifPrivate: boolean = false;
  ifOutbox: boolean = false;
  ifInbox: boolean = true;
  userId: any;
  sessionId: any;
  error: any = '';
  groupNames: any = [];
  valueName: any;
  className: string = 'one-class';
  selectedItem=0;
  newspage = 1;
  privatepage = 1;
  newposts: any;
  public pagingEnabled: boolean = true;
  public pagingEnabled1: boolean = true;

  private sub1$:any;
  private sub2$:any;
  options : InAppBrowserOptions = {
      location : 'yes',//Or 'no'
      hidden : 'no', //Or  'yes'
      clearcache : 'yes',
      clearsessioncache : 'yes',
      zoom : 'yes',//Android only ,shows browser zoom controls
      hardwareback : 'yes',
      mediaPlaybackRequiresUserAction : 'no',
      shouldPauseOnSuspend : 'no', //Android only
      closebuttoncaption : 'Close', //iOS only
      disallowoverscroll : 'no', //iOS only
      toolbar : 'yes', //iOS only
      enableViewportScale : 'no', //iOS only
      allowInlineMediaPlayback : 'no',//iOS only
      presentationstyle : 'pagesheet',//iOS only
      fullscreen : 'yes',//Windows only
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public serviceProvider: ServiceProvider, private storage: Storage, private loader: Loader,
    private alertCtrl: AlertController, public platform: Platform) {
    document.addEventListener("resume", function() {
      // do something
      this.displayNesfeedFunction();
    }, true);

    this.restaurantdetail = [{'topImage': "", 'datetime':'01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title':"Basic Rules for the Newsfeed", 
    'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
    'comments': '14', 'file': "assets/imgs/newsfeed/file.png", 'imageFile': "assets/imgs/newsfeed/image.png" },
    {'topImage': "assets/imgs/newsfeed/toppin.png", 'datetime':'01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title':"Basic Rules for the Newsfeed", 
    'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
    'comments': '14', 'file': "assets/imgs/newsfeed/file.png", 'imageFile': "" },
    {'topImage': "assets/imgs/newsfeed/toppin.png", 'datetime':'01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title':"Basic Rules for the Newsfeed", 
    'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
    'comments': '14', 'file': "", 'imageFile': "" },
    {'topImage': "assets/imgs/newsfeed/remark.png", 'datetime':'01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title':"Basic Rules for the Newsfeed", 
    'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
    'comments': '14', 'file': "", 'imageFile': "assets/imgs/newsfeed/image.png" }];

    this.dinnerdetail = [{'topImage': "assets/imgs/newsfeed/remark.png", 'datetime':'01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title':"Basic Rules for the Newsfeed", 
    'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
    'comments': '14', 'file': "", 'imageFile': "assets/imgs/newsfeed/image.png" },
    {'topImage': "assets/imgs/newsfeed/toppin.png", 'datetime':'01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title':"Basic Rules for the Newsfeed", 
    'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
    'comments': '14', 'file': "assets/imgs/newsfeed/file.png", 'imageFile': "" },
    {'topImage': "assets/imgs/newsfeed/toppin.png", 'datetime':'01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title':"Basic Rules for the Newsfeed", 
    'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
    'comments': '14', 'file': "", 'imageFile': "" },
    {'topImage': "", 'datetime':'01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title':"Basic Rules for the Newsfeed", 
    'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
    'comments': '14', 'file': "assets/imgs/newsfeed/file.png", 'imageFile': "assets/imgs/newsfeed/image.png" }];

    this.othersdetail = [{'datetime':'01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title':"Basic Rules for the Newsfeed", 
    'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
    'comments': '14', 'file': "assets/imgs/newsfeed/file.png", 'imageFile': "" },
    {'datetime':'01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title':"Basic Rules for the Newsfeed", 
    'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
    'comments': '14', 'file': "assets/imgs/newsfeed/file.png", 'imageFile': "assets/imgs/newsfeed/image.png" },
    {'datetime':'01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title':"Basic Rules for the Newsfeed", 
    'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
    'comments': '14', 'file': "", 'imageFile': "" },
    {'datetime':'01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title':"Basic Rules for the Newsfeed", 
    'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
    'comments': '14', 'file': "", 'imageFile': "assets/imgs/newsfeed/image.png" }];

    // this.privatemessagedetail = [{'datetime':'01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title':"Basic Rules for the Newsfeed", 
    // 'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
    // 'file': "assets/imgs/newsfeed/file.png", 'imageFile': "" },
    // {'datetime':'01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title':"Basic Rules for the Newsfeed", 
    // 'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
    // 'file': "assets/imgs/newsfeed/file.png", 'imageFile': "assets/imgs/newsfeed/image.png" },
    // {'datetime':'01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title':"Basic Rules for the Newsfeed", 
    // 'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
    // 'file': "", 'imageFile': "" },
    // {'datetime':'01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title':"Basic Rules for the Newsfeed", 
    // 'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
    // 'file': "", 'imageFile': "assets/imgs/newsfeed/image.png" }];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsFeedPage');
    this.newsfeed = 'general';
    this.newsFeedStatusChange(this.newsfeed);

    this.storage.get("userData").then(userData => {
      // console.log("newsfeed entry userData", userData);
      this.userId = userData.response.user_id;
      this.sessionId = userData.response.sessionId;
      this.displayNesfeedFunction();
    });
  }

  // ionViewWillUnload() {
  //   this.displayNesfeedFunction();
  //   // this.sub2$.unsubscribe();
  // }

  displayNesfeedFunction() {
    // console.log("displayNesfeedFunction");
    this.loader.show("Displaying Newsfeed Posts...");
    let disNewsfeedObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "pageNo":this.newspage
    }

    // console.log("disNewsfeedObj", disNewsfeedObj);
    this.serviceProvider.displayNewsfeedApi(disNewsfeedObj).then(data => {

        if (data["success"] == 0) {
            this.loader.hide();
            this.error = data["message"];
            this.displayPrivateMessage();
        } else if (data["success"] == 1) {
            this.loader.hide();
            let obj: any = data;
            this.groupNames = [];
            // console.log("obj.response", obj.response);
            for(let i in obj.response) {
              if(obj.response[i].group_name == "General") {
                this.valueName = "general"
              } else if(obj.response[i].group_name == "Restaurant") {
                this.valueName = "restaurant"
              } else if(obj.response[i].group_name == "Dinner") {
                this.valueName = "dinner"
              } else if(obj.response[i].group_name == "Others") {
                this.valueName = "others"
              } else {

              }
              this.groupNames.push({"group_name": obj.response[i].group_name, "value_name": this.valueName, "badge": obj.response[i].countmessage});
              // console.log("this.groupNames", this.groupNames);
              // console.log("obj.response[i].data", obj.response[i].data);

              this.newposts = obj.response[i];
              // console.log("this.newposts", this.newposts.data);
              for(let i in this.newposts.data) {
                // console.log("this.newposts.data[i]", this.newposts.data[i]);
                // this.generaldetail = this.newposts.data[i];
                this.generaldetail.push(this.newposts.data[i])
                // console.log("this.generaldetail", this.generaldetail);
              }

              // this.generaldetail = obj.response[i].data;
            }
            this.displayPrivateMessage();
        } else if (data["success"] == 2) {
            this.loader.hide();
            this.error = data["message"];
            this.displayPrivateMessage();
        } else if (data["success"] == 4) {
            this.loader.hide();
            let alert = this.alertCtrl.create({
              subTitle:data["message"],
              cssClass: 'newsFeedAlertCss',
              buttons: [
                {
                  text: 'OK',
                  handler: () => {
                    // console.log("newsfeed session expired");
                    this.navCtrl.push("LoginPage");
                  }
                }
              ]
            });
            alert.present();

        } else {
          this.loader.hide();
          this.error = '';
        }
    }, err => {
        this.loader.hide();
        console.log("err", err)
    });
  }

  doInfinite(infiniteScroll) {
    this.newspage = this.newspage+1;
    let disNewsfeedObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "pageNo":this.newspage
    }
    setTimeout(() => {
      this.serviceProvider.displayNewsfeedApi(disNewsfeedObj).then(data => {
        let obj: any = data;
        if (obj.response.length) {
          for(let i in obj.response) {
            this.newposts = obj.response[i];
            // console.log("this.newposts", this.newposts.data);
            for(let i in this.newposts.data) {
              // console.log("this.newposts.data[i]", this.newposts.data[i]);
              this.generaldetail.push(this.newposts.data[i])
              // console.log("this.generaldetail", this.generaldetail);
              document.addEventListener("pause", function() {
                // do something
                this.generaldetail = this.generaldetail;
              }, true);
            }
          }
        } else {
            this.pagingEnabled = false;
        }
      });

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  newsFeedStatusChange(newsfeedname){
    console.log("newsfeedname", newsfeedname);
    if(newsfeedname == "general"){
      console.log("general");
      this.ifGeneralSelected = true;
      this.ifRestaurantSelected = false;
      this.ifDinnerSelected = false;
      this.ifOthersSelected = false;
      this.ifPrivateMessageSelected = false;

      this.ifisNotPrivate = true;
      this.ifPrivate = false;

    } else if(newsfeedname == "restaurant"){
      console.log("restaurant");
      this.ifGeneralSelected = false;
      this.ifRestaurantSelected = true;
      this.ifDinnerSelected = false;
      this.ifOthersSelected = false;
      this.ifPrivateMessageSelected = false;

      this.ifisNotPrivate = true;
      this.ifPrivate = false;

    } else if(newsfeedname == "dinner"){
      console.log("dinner");
      this.ifGeneralSelected = false;
      this.ifRestaurantSelected = false;
      this.ifDinnerSelected = true;
      this.ifOthersSelected = false;
      this.ifPrivateMessageSelected = false;

      this.ifisNotPrivate = true;
      this.ifPrivate = false;

    } else if(newsfeedname == "others"){
      console.log("others");
      this.ifGeneralSelected = false;
      this.ifRestaurantSelected = false;
      this.ifDinnerSelected = false;
      this.ifOthersSelected = true;
      this.ifPrivateMessageSelected = false;

      this.ifisNotPrivate = true;
      this.ifPrivate = false;
      
    } else {}

  }

  displayPrivateMessage() {
    // console.log("displayPrivateMessage");
    this.loader.show("Displaying Private Messages...");
    let disprMsgObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "pageNo":this.privatepage
    }

    // console.log("disprMsgObj", disprMsgObj);
    this.serviceProvider.displayPrivateMessageApi(disprMsgObj).then(data => {
      // console.log("displayPrivateMessageApi", data);
        if (data["success"] == 0) {
            this.loader.hide();
            this.error = data["message"];
        } else if (data["success"] == 1) {
            this.loader.hide();

        } else if (data["success"] == 2) {
            this.loader.hide();
            this.error = data["message"];

        } else if (data["success"] == 4) {
            this.loader.hide();
            let alert = this.alertCtrl.create({
              subTitle:data["message"],
              cssClass: 'newsFeedAlertCss',
              buttons: [
                {
                  text: 'OK',
                  handler: () => {
                    // console.log("newsfeed session expired");
                    this.navCtrl.push("LoginPage");
                  }
                }
              ]
            });
            alert.present();

        } else {
          this.loader.hide();
          this.error = '';
        }
    }, err => {
        this.loader.hide();
        console.log("err", err)
    });
  }

  doInfinite1(infiniteScroll) {
    this.privatepage = this.privatepage+1;
    let disprMsgObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "pageNo":this.privatepage
    }
    setTimeout(() => {
      this.serviceProvider.displayPrivateMessageApi(disprMsgObj).then(data => {
        let obj: any = data;
        // if (obj.response.length) {
        //   for(let i in obj.response) {
        //     this.newposts = obj.response[i];
        //     // console.log("this.newposts", this.newposts.data);
        //     for(let i in this.newposts.data) {
        //       // console.log("this.newposts.data[i]", this.newposts.data[i]);
        //       this.generaldetail.push(this.newposts.data[i])
        //       // console.log("this.generaldetail", this.generaldetail);
        //       document.addEventListener("pause", function() {
        //         // do something
        //         this.generaldetail = this.generaldetail;
        //       }, true);
        //     }
        //   }
        // } else {
        //     this.pagingEnabled = false;
        // }
      });

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  openPrivate(i) {
    console.log("open private");
    this.selectedItem = i;
    this.ifGeneralSelected = false;
      this.ifRestaurantSelected = false;
      this.ifDinnerSelected = false;
      this.ifOthersSelected = false;
      this.ifPrivateMessageSelected = true;

      this.ifisNotPrivate = false;
      this.ifPrivate = true;
  }

  openTab(i, feedname) {
    this.selectedItem = i;
    this.newsFeedStatusChange(feedname);
    
  }

  createInbox() {
    this.ifOutbox = true;
    this.ifInbox = false;
  }

  createOutbox() {
    this.ifOutbox = false;
    this.ifInbox = true;
  }

  onClickOfPrivateMessage(index) {
    // console.log("on click of PrivateMessage", index);
    this.navCtrl.push("PrivateMessageDetailPage");
  }

  onClickOfGeneral(index, general) {
    console.log("on click of General index", index);
    console.log("on click of General general", general);
    this.navCtrl.push("NewsfeedDetailPage", {'title': 'General Detail', 'post_id': general.id});
  }

  onClickOfRestaurant(index) {
    // console.log("on click of onClickOfRestaurant", index);
    this.navCtrl.push("NewsfeedDetailPage", {'title': 'Restaurant Detail'});
  }

  onClickOfDinner(index) {
    // console.log("on click of onClickOfDinner", index);
    this.navCtrl.push("NewsfeedDetailPage", {'title': 'Dinner Detail'});
  }

  onClickOfOthers(index) {
    // console.log("on click of onClickOfOthers", index);
    this.navCtrl.push("NewsfeedDetailPage", {'title': 'Others Detail'});
  }

  createNewsfeedEntry() {
    // console.log("create newfeed entry");
    this.navCtrl.push("CreateNewsfeedEntryPage");
  }

  createNewMessage() {
    // console.log("create new message");
    this.navCtrl.push("CreateNewPrivateMessagePage");
  }

  openfilesinbrowser(photo) {
    console.log("openfilesinbrowser", photo);
    let URL = photo.file_name;
    let browserInst = new InAppBrowser();
    let browser = browserInst.create(URL, '_system', this.options)
  }

}