import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.page.html',
  styleUrls: ['./leaderboards.page.scss'],
})
export class LeaderboardsPage implements OnInit {

  top10 = JSON.parse(localStorage.getItem('top10'));
  constructor() { }

  ngOnInit() {
      console.log(this.top10);
  }

}
