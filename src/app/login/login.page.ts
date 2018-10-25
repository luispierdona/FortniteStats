import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../player.service';
import {Router} from '@angular/router';
import {AdMobFree, AdMobFreeBannerConfig} from '@ionic-native/admob-free/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  userId: any;
  playerStats: any;
  playerTotals: any;
  top10: any;
  upcoming: any;
  constructor(private playerService: PlayerService, public router: Router, private admobFree: AdMobFree,
            public loadingController: LoadingController) {

  }

  ngOnInit() {
      const userNameStorage = localStorage.getItem('username');
      const und = 'undefined';
      if (!(userNameStorage === und)) {
          this.login();
          this.router.navigate(['totals']);

      }
  }

  login() {
      // this.playerService.bringData(this.username);
      localStorage.setItem('username', this.username);
      this.presentLoading();
      this.userId = this.playerService.getUserID(this.username).subscribe(
          resultUserId => {
              this.userId = resultUserId;
              console.log(this.userId);
              this.playerStats = this.playerService.getUserStats(this.userId.uid, this.userId.platforms, 'alltime').subscribe(
                  resultPlayerStats => {
                      this.playerStats = resultPlayerStats.stats;
                      this.playerTotals = resultPlayerStats.totals;
                      console.log(this.playerStats);
                      console.log(this.playerTotals);
                      localStorage.setItem('playerStats', JSON.stringify(this.playerStats));
                      localStorage.setItem('playerTotals', JSON.stringify(this.playerTotals));
                      this.upcoming = this.playerService.getUpcoming().subscribe(
                          resultUpcoming => {
                              this.upcoming = resultUpcoming;
                              console.log(this.upcoming);
                              localStorage.setItem('upcoming', JSON.stringify(this.upcoming));
                              this.top10 = this.playerService.getTop10().subscribe(
                                  resultTop10 => {
                                      this.top10 = resultTop10;
                                      console.log(this.top10);
                                      localStorage.setItem('top10', JSON.stringify(this.top10));
                                      this.closeLoading();
                                      if (this.userId.username === 'undefined') {
                                          this.notFoundUser();
                                      }
                                      this.router.navigate(['totals']);
                                  }
                              ); // End Top 10
                          }
                      ); // End Upcoming
                  }
              ); // End Player Stats
          },
          error => {
            console.log(error);
          }
      ); // End userID
  }

    async presentLoading() {
        const loading = await this.loadingController.create({
            message: 'Getting amazing data'
            // duration: 2000
        });
        return await loading.present();
    }

    async closeLoading() {
        this.loadingController.dismiss();
    }

    async notFoundUser() {
        const loading = await this.loadingController.create({
            message: 'User Not Found :(',
            spinner: 'hide',
            duration: 2000
        });
        return await loading.present();
    }
}



