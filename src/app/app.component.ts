import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Totals',
      url: '/totals',
      icon: 'ios-aperture'
    },
    {
      title: 'Solo',
      url: '/solo',
      icon: 'md-person'
    },
    {
      title: 'Duo',
      url: '/duo',
      icon: 'md-people'
    },
    {
      title: 'Squad',
      url: '/squad',
      icon: 'ios-people'
    },
    {
      title: 'Leaderboards',
      url: '/leaderboards',
      icon: 'ios-podium'
    },
    {
      title: 'Upcoming',
      url: '/upcoming',
      icon: 'logo-dropbox'
    },
    {
      title: 'Miscellaneous',
      url: '/misc',
      icon: 'logo-freebsd-devil'
    },

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
