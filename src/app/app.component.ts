import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { NewsFeedPage } from '../pages/news-feed/news-feed';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = HomePage;
  rootPage:any = LoginPage;
  pages: Array<{title: string, component: any, image: any, otherimage: any}>;
  @ViewChild(Nav) nav: Nav;
  selectedmenu: String;
  selectedmenuimage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.initializeApp(statusBar, splashScreen);
      statusBar.styleDefault();
      if(platform.is('android')) {
        statusBar.backgroundColorByHexString('#000000');
      }
      statusBar.overlaysWebView(false);
      splashScreen.hide();
    });

    this.pages = [
      { image: 'assets/imgs/menuicon/newsfeed.png', otherimage: 'assets/imgs/menuicon/newsfeed1.png', title: 'NEWS FEED', component: 'NewsFeedPage'},
      { image: 'assets/imgs/menuicon/dutyroster.png', otherimage: 'assets/imgs/menuicon/dutyroster1.png', title: 'DUTY ROSTER', component: 'DutyRosterPage'},
      { image: 'assets/imgs/menuicon/calendar.png', otherimage: 'assets/imgs/menuicon/calendar1.png', title: 'CALENDAR', component: 'CalendarPage'},
      { image: 'assets/imgs/menuicon/mydepartment.png', otherimage: 'assets/imgs/menuicon/mydepartment1.png', title: 'MY DEPARTMENT', component: 'MyDepartmentPage'},
      { image: 'assets/imgs/menuicon/learningpltfrm.png', otherimage: 'assets/imgs/menuicon/learningpltfrm1.png', title: 'LEARNING PLATFORM', component: 'LearningPlatformPage'},
      { image: 'assets/imgs/menuicon/notes.png', otherimage: 'assets/imgs/menuicon/notes1.png', title: 'NOTES', component: 'NotesPage'},
      { image: 'assets/imgs/menuicon/lostnfound.png', otherimage: 'assets/imgs/menuicon/lostnfound1.png', title: 'LOST & FOUND', component: 'LostnfoundPage'},
      { image: 'assets/imgs/menuicon/maintenance.png', otherimage: 'assets/imgs/menuicon/maintenance1.png', title: 'MAINTENANCE', component: 'MaintenancePage'},
    ];
  }

  openPage(page) {
    this.selectedmenu = page.title;
    if(page.component){
      this.nav.setRoot(page.component);
      this.menu.close();
    }
  }

  closeMenuPage() {
    this.menu.close();
  }

  initializeApp(statusBar: StatusBar, splashScreen: SplashScreen) {

    let email = window.localStorage.getItem('email') ? window.localStorage.getItem('email') : '';
    let password = window.localStorage.getItem('password') ? window.localStorage.getItem('password') : '';

    if(email == window.localStorage.getItem('email') && password == window.localStorage.getItem('password')) {
      console.log("already logged in");
      this.nav.setRoot(NewsFeedPage);
    }else{
      this.nav.setRoot(LoginPage);
    }
  }
}

