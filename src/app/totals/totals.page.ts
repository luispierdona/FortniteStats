import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import {AdMobFree, AdMobFreeBannerConfig} from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-totals',
  templateUrl: './totals.page.html',
  styleUrls: ['./totals.page.scss'],
})
export class TotalsPage implements OnInit {


  totals = JSON.parse(localStorage.getItem('playerTotals'));
  constructor(private admobFree: AdMobFree) {
      const bannerConfig: AdMobFreeBannerConfig = {
          // add your config here
          // for the sake of this example we will just use the test config
          // id: 'ca-app-pub-1784714941232014/2763825257',
          isTesting: false,
          autoShow: true
      };
      this.admobFree.banner.config(bannerConfig);
      this.admobFree.banner.prepare()
          .then(() => {
              // banner Ad is ready
              // if we set autoShow to false, then we will need to call the show method here
          })
          .catch(e => console.log(e));
  }

  ngOnInit() {
      console.log(this.totals);
  }

}
