import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Http, Response, RequestOptions, URLSearchParams, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

    user: any = [];
    userStats: any = [];
  constructor(private http: Http, private httpC: HttpClient, public router: Router) { }

    bringData(usr) {
      localStorage.setItem('username', 'undefined');
        this.getUserID(usr).subscribe(
            restul => {this.getUserStats(restul.uid, 'pc', 'alltime')
                .subscribe(resultStats => {this.userStats = resultStats; } );
                console.log(this.userStats);
                localStorage.setItem('username', restul.username);
                // this.router.navigate(['totals']);
            },
            error => {
                console.log(error);
            });

    }

  getUserID(usr: string): Observable<any> {

      const URL = 'https://fortnite-public-api.theapinetwork.com/prod09/users/id';
      const headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Authorization' , 'a59d199dd8d531703a494b9e97815244');
      const body9 = new HttpParams().set('username', usr);

      return this.http.post(URL, body9.toString(), {headers: headers})
        .map(this.extractDataBody)
        .catch(this.handleErrorObservable);
    }

    getUserStats(usrId, platform, window: string): Observable<any> {

      const URL = 'https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats';
      const headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Authorization' , 'a59d199dd8d531703a494b9e97815244');
      const body9 = new HttpParams()
        .set('user_id', usrId)
        .set('platform', platform)
        .set('window', window);

        return this.http.post(URL, body9.toString(), {headers: headers})
        .map(this.extractDataBody)
        .catch(this.handleErrorObservable);
    }

    getUpcoming(): Observable<any> {

        const URL = 'https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get';
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization' , 'a59d199dd8d531703a494b9e97815244');
        const body9 = new HttpParams().set('language', 'en');

        return this.http.post(URL, body9.toString(), {headers: headers})
            .map(this.extractDataBody)
            .catch(this.handleErrorObservable);
    }

    getTop10(): Observable<any> {

        const URL = 'https://fortnite-public-api.theapinetwork.com/prod09/leaderboards/get';
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization' , 'a59d199dd8d531703a494b9e97815244');
        const body9 = new HttpParams()
            .set('window', 'top_10_kills');

        return this.http.post(URL, body9.toString(), {headers: headers})
            .map(this.extractDataBody)
            .catch(this.handleErrorObservable);
    }


    private extractData(res: Response) {
      return res;
    }

    private extractDataBody(res: Response) {
      const body = res.json();
      return body || {};
    }

    private handleErrorObservable (error: Response | any) {
      console.error(error.message || error);
      return Observable.throw(error.message || error);
    }

    logout() {
      localStorage.setItem('username', 'undefined');
    }

}
