import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},

  // { path: '', loadChildren: './login/login.module#LoginPageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule'},
  { path: 'solo', loadChildren: './solo/solo.module#SoloPageModule', canActivate: [AuthGuard] },
  { path: 'duo', loadChildren: './duo/duo.module#DuoPageModule', canActivate: [AuthGuard] },
  { path: 'squad', loadChildren: './squad/squad.module#SquadPageModule', canActivate: [AuthGuard] },
  { path: 'misc', loadChildren: './misc/misc.module#MiscPageModule', canActivate: [AuthGuard] },
  { path: 'totals', loadChildren: './totals/totals.module#TotalsPageModule', canActivate: [AuthGuard] },
  { path: 'leaderboards', loadChildren: './leaderboards/leaderboards.module#LeaderboardsPageModule', canActivate: [AuthGuard] },
  { path: 'upcoming', loadChildren: './upcoming/upcoming.module#UpcomingPageModule', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
