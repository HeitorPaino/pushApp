import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Push } from '@ionic/cloud-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private push:Push) {

  }

  makePush(){ 
    this.push.rx.notification()
    .subscribe((msg) => {
      alert(msg.title + ': ' + msg.text);
    });
  } 
}
