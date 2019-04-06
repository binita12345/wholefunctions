import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StudyFNBPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-study-f-n-b',
  templateUrl: 'study-f-n-b.html',
})
export class StudyFNBPage {
	
  pregressPerc: any;
  studyWineArray : any = [];
  studyFoodArray : any = [];
  studyStandardArray : any = [];
  studyWineLists: any;
  studyFoodLists: any;
  studyStandardLists: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.studyWineArray = [{'image': 'assets/imgs/mydepartment/greengrapes.jpg', 'percent': '87', 'name': 'White Wine Grapes', 'points': 295, 'score': 83},
  	{'image': 'assets/imgs/mydepartment/redgrapes.jpg', 'percent': '50', 'name': 'Red Wine Grapes', 'points': 99, 'score': 28},
  	{'image': 'assets/imgs/mydepartment/countries.jpg', 'percent': '16', 'name': 'Countrie', 'points': 55, 'score': 12},
  	{'image': 'assets/imgs/mydepartment/maturation.jpg', 'percent': '6', 'name': 'Maturation', 'points': 10, 'score': 3},
  	{'image': 'assets/imgs/mydepartment/degustation.jpg', 'percent': '35', 'name': 'Degustation', 'points': 40, 'score': 35},
  	{'image': 'assets/imgs/mydepartment/comb.jpg', 'percent': '90', 'name': 'Wine + Food Combination', 'points': 280, 'score': 85}];

  	this.studyWineLists = this.studyWineArray;

  	this.studyFoodArray = [{'image': 'assets/imgs/mydepartment/fish.jpeg', 'percent': '95', 'name': 'Fish', 'points': 295, 'score': 83},
  	{'image': 'assets/imgs/mydepartment/meat.jpeg', 'percent': '78', 'name': 'Meat', 'points': 99, 'score': 28},
  	{'image': 'assets/imgs/mydepartment/cheese.jpg', 'percent': '60', 'name': 'Cheese', 'points': 55, 'score': 12},
  	{'image': 'assets/imgs/mydepartment/mashrooms.jpeg', 'percent': '82', 'name': 'Mashroom', 'points': 10, 'score': 3},
  	{'image': 'assets/imgs/mydepartment/herbs.jpg', 'percent': '17', 'name': 'Herbs + Spices', 'points': 40, 'score': 35},];

  	this.studyFoodLists = this.studyFoodArray;

  	this.studyStandardArray = [{'image': 'assets/imgs/mydepartment/lqa.jpg', 'percent': '100', 'name': 'LQA Breakfast', 'points': 295, 'score': 83},
  	{'image': 'assets/imgs/mydepartment/china.jpg', 'percent': '85', 'name': 'LQA Lunch & Dinner', 'points': 99, 'score': 28},
  	{'image': 'assets/imgs/mydepartment/telephone.jpg', 'percent': '100', 'name': 'Telephone', 'points': 55, 'score': 12}];

  	this.studyStandardLists = this.studyStandardArray;
  }

  filterItems(ev: any) {
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.studyWineLists = this.studyWineArray.filter((item) => {
          return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });
    } else if(val == ''){
      this.studyWineLists = this.studyWineArray;
    }

    let val1 = ev.target.value;
    if (val1 && val1.trim() != '') {
      this.studyFoodLists = this.studyFoodArray.filter((item) => {
          return ((item.name.toLowerCase().indexOf(val1.toLowerCase()) > -1));
      });
    } else if(val1 == ''){
      this.studyFoodLists = this.studyFoodArray;
    }

    let val2 = ev.target.value;
    if (val2 && val2.trim() != '') {
      this.studyStandardLists = this.studyStandardArray.filter((item) => {
          return ((item.name.toLowerCase().indexOf(val2.toLowerCase()) > -1));
      });
    } else if(val2 == ''){
      this.studyStandardLists = this.studyStandardArray;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudyFNBPage');
  }

  gotoBackMenu() {
    console.log("gotoBackMenu");
    this.navCtrl.push("LearningPlatformPage");
  }

  gotoStudyMenuList(menu) {
  	console.log("gotoStudyMenuList", menu);
  	this.navCtrl.push("SubStudyMenuListPage", {'menuname': menu.name})
  }

}
