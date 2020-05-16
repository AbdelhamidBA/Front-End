import { DeleteuserComponent } from './components/admin-components/modules/deleteuser/deleteuser.component';
import { UpdateuserComponent } from './components/admin-components/modules/updateuser/updateuser.component';
import { AdduserComponent } from './components/admin-components/modules/adduser/adduser.component';
import { AdminComponentsComponent } from './components/admin-components/admin-components.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { FilmVisitedComponent } from './components/FilmComponents/film-visited/film-visited.component';
import { DeleteFilmComponentComponent } from './components/FilmComponents/delete-film-component/delete-film-component.component';
import { UpdateFilmComponentComponent } from './components/FilmComponents/update-film-component/update-film-component.component';
import { FilmInfoComponentComponent } from './components/FilmComponents/film-info-component/film-info-component.component';
import { AddFilmComponentComponent } from './components/FilmComponents/add-film-component/add-film-component.component';
import { ListFilmComponentComponent } from './components/FilmComponents/list-film-component/list-film-component.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  {path: '', component: ListFilmComponentComponent},
  {path: 'addfilm', component: AddFilmComponentComponent},
  {path: 'film/show/:id', component: FilmInfoComponentComponent},
  {path: 'updatefilm/:id', component: UpdateFilmComponentComponent},
  {path: 'deletefilm/:id', component: DeleteFilmComponentComponent},
  {path: 'film/visited', component: FilmVisitedComponent},
  {
    path: '',
    component: AdminComponentsComponent,
    children: [{
      path: '',
      component: DashboardComponent
    },
    {
    path: 'adduser',
    component: AdduserComponent
    },
  {
    path: 'updateuser',
    component: UpdateuserComponent
  },
  {
    path: 'deleteuser',
    component: DeleteuserComponent
  }]
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

