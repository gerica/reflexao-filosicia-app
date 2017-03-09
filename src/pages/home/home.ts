import { ReflexaoPage } from './../reflexao/reflexao';
import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  onNextReflexao() {
    this.navCtrl.push(ReflexaoPage);
  }

}
