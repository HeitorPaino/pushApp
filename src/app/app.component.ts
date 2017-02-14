import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Push, PushToken } from '@ionic/cloud-angular';
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, push: Push) {
    platform.ready().then(() => {
      push.register().then((t: PushToken) => {
          return push.saveToken(t);
        }).then((t: PushToken) => {
          console.log('Token saved:', t.token);
          push.rx.notification()
            .subscribe((msg) => {
              alert(msg.title + ': ' + msg.text);
  });
        });
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
