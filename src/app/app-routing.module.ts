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
  {path: 'add', component: AddFilmComponentComponent},
  {path: ':id', component: FilmInfoComponentComponent},
  {path: 'update/:id', component: UpdateFilmComponentComponent},
  {path: 'delete/:id', component: DeleteFilmComponentComponent},
  {path: 'film/visited', component: FilmVisitedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
