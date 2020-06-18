import { LogoutComponent } from './components/logout/logout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponentComponent } from './components/register-component/register-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { DeleteuserComponent } from './components/admin-components/modules/deleteuser/deleteuser.component';
import { UpdateuserComponent } from './components/admin-components/modules/updateuser/updateuser.component';
import { AdduserComponent } from './components/admin-components/modules/adduser/adduser.component';
import { AdminComponentsComponent } from './components/admin-components/admin-components.component';
import { FilmVisitedComponent } from './components/FilmComponents/film-visited/film-visited.component';
import { DeleteFilmComponentComponent } from './components/FilmComponents/delete-film-component/delete-film-component.component';
import { UpdateFilmComponentComponent } from './components/FilmComponents/update-film-component/update-film-component.component';
import { FilmInfoComponentComponent } from './components/FilmComponents/film-info-component/film-info-component.component';
import { AddFilmComponentComponent } from './components/FilmComponents/add-film-component/add-film-component.component';
import { ListFilmComponentComponent } from './components/FilmComponents/list-film-component/list-film-component.component';
import { DashboardComponent } from './components/admin-components/modules/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'movie/show/:id', component: FilmInfoComponentComponent},
  {path: 'movies', component: ListFilmComponentComponent},

  {
    path: 'movie/update/:id',
    component: UpdateFilmComponentComponent,
    canActivate:[AuthGuard],
    data: {roles:['ROLE_ADMIN']}
  },
  {path: 'movie/delete/:id',
  component: DeleteFilmComponentComponent,
  canActivate:[AuthGuard],
  data: {roles:['ROLE_ADMIN']}
  },
  {path: 'movie/visited', component: FilmVisitedComponent},
  {path: 'login',component:LoginComponentComponent},
  {path: 'register',component:RegisterComponentComponent},
  {path: 'logout', component: LogoutComponent},
  {
    path: 'admin',
    component: AdminComponentsComponent,
    canActivate:[AuthGuard],
    data: {roles:['ROLE_ADMIN','ROLE_USER_MANAGER','ROLE_FILM_MANAGER']},
    children: [{
      path: '',
      component: DashboardComponent
    },
    {
    path: 'adduser',
    component: AdduserComponent
    },
    {
        path: 'addfilm',
        component: AddFilmComponentComponent,

    },
  {
    path: 'updateuser',
    component: UpdateuserComponent
  },
  {
    path: 'updatefilm',
    component: UpdateFilmComponentComponent
  },
  {
    path: 'deleteuser',
    component: DeleteuserComponent
  },
  {path: 'deletefilm',
  component: DeleteFilmComponentComponent
  }]
  },
  {path:'404',component:NotFoundComponent},
  {path:'**',component:NotFoundComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

