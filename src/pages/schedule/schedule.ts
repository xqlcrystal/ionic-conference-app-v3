import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';

/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  queryText = '';
  segment = 'all';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public modalCtrl: ModalController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }

  updateSchedule(){

  }

  async presentFilter(){
    const modal=this.modalCtrl.create('ScheduleFilterPage');
    await modal.present();

  }

}
