import { Component, OnInit } from '@angular/core';
import {AdMobFree, AdMobFreeBannerConfig} from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.page.html',
  styleUrls: ['./squad.page.scss'],
})
export class SquadPage implements OnInit {

  playerStats = JSON.parse(localStorage.getItem('playerStats'));
  playerTopSolo: number;
  playerTop10Solo: number;
  playerTop25Solo: number;
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
      console.log(this.playerStats);
      if (this.playerStats.placetop1_squad === 0) {
          this.playerTopSolo = 0;
      } else {
          this.playerTopSolo = Math.round((this.playerStats.matchesplayed_squad) / (this.playerStats.placetop1_squad));
      }
      if (this.playerStats.placetop3_squad === 0) {
          this.playerTop10Solo = 0;
      } else {
          this.playerTop10Solo = Math.round((this.playerStats.matchesplayed_squad) / (this.playerStats.placetop3_squad));
      }
      if (this.playerStats.placetop6_squad === 0) {
          this.playerTop25Solo = 0;
      } else {
          this.playerTop25Solo = Math.round((this.playerStats.matchesplayed_squad) / (this.playerStats.placetop6_squad));
      }
  }

}
