import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo01Component } from './demos/demo01/demo01.component';
import { Demo02Component } from './demos/demo02/demo02.component';
import { Demo03Component } from './demos/demo03/demo03.component';
import { Demo04Component } from './demos/demo04/demo04.component';
import { Demo05Component } from './demos/demo05/demo05.component';
import { Demo06Component } from './demos/demo06/demo06.component';
import { Demo07Component } from './demos/demo07/demo07.component';
import { Demo08Component } from './demos/demo08/demo08.component';
import { Demo09Component } from './demos/demo09/demo09.component';
import { Demo10Component } from './demos/demo10/demo10.component';
import { Demo11Component } from './demos/demo11/demo11.component';
import { Demo12Component } from './demos/demo12/demo12.component';
import { Demo13Component } from './demos/demo13/demo13.component';
import { Demo14Component } from './demos/demo14/demo14.component';
import { Demo15Component } from './demos/demo15/demo15.component';
import { Demo16Component } from './demos/demo16/demo16.component';
import { DemosComponent } from './demos/demos.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { Exo01Component } from './exercices/exo01/exo01.component';
import { Exo02Component } from './exercices/exo02/exo02.component';
import { Exo03Component } from './exercices/exo03/exo03.component';
import { Exo05Component } from './exercices/exo05/exo05.component';
import { Exo07Component } from './exercices/exo07/exo07.component';
import { Exo08Component } from './exercices/exo08/exo08.component';
import { Exo09Component } from './exercices/exo09/exo09.component';
import { Exo11Component } from './exercices/exo11/exo11.component';
import { Exo12Component } from './exercices/exo12/exo12.component';
import { Exo15Component } from './exercices/exo15/exo15.component';
import { HomeComponent } from './home/home.component';
import { FourofourComponent } from './shared/components/fourofour/fourofour.component';
import { Demo17Component } from './demos/demo17/demo17.component';
import { Demo18Component } from './demos/demo18/demo18.component';
import { isauthGuard } from './demos/demo18/isauth.guard';
import { Demo19Component } from './demos/demo19/demo19.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  {
    path: 'demos', children: [
      { path: '', component: DemosComponent },
      { path: 'demo01', component: Demo01Component },
      { path: 'demo02', component: Demo02Component },
      { path: 'demo03', component: Demo03Component },
      { path: 'demo04', component: Demo04Component },
      { path: 'demo05', component: Demo05Component },
      { path: 'demo06', component: Demo06Component },
      { path: 'demo07', component: Demo07Component },
      { path: 'demo08', component: Demo08Component },
      { path: 'demo09', component: Demo09Component },
      { path: 'demo10', component: Demo10Component },
      { path: 'demo11', component: Demo11Component },
      { path: 'demo12', component: Demo12Component },
      { path: 'demo13', component: Demo13Component },
      { path: 'demo14', component: Demo14Component },
      { path: 'demo15', component: Demo15Component },
      {
        path: 'demo16', children: [
          { path: '', component: Demo16Component },
          { path: 'routage', component: Demo16Component },
          { path: 'routage/:id', component: Demo16Component },
        ]
      },
      { path: 'demo17', component: Demo17Component },
      { path: 'demo18', canActivate : [isauthGuard], component: Demo18Component },
      { path: 'demo19', component: Demo19Component },

    ]
  },

  {
    path: 'exercices', children: [
      { path: '', component: ExercicesComponent },
      { path: 'exo01', component: Exo01Component },
      { path: 'exo02', component: Exo02Component },
      { path: 'exo03', component: Exo03Component },
      { path: 'exo05', component: Exo05Component },
      { path: 'exo07', component: Exo07Component },
      { path: 'exo08', component: Exo08Component },
      { path: 'exo09', component: Exo09Component },
      { path: 'exo11', component: Exo11Component },
      { path: 'exo12', component: Exo12Component },
      { path: 'exo15', component: Exo15Component },
    ]
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: FourofourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
