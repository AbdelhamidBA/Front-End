import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListFilmComponentComponent } from './components/FilmComponents/list-film-component/list-film-component.component';
import { PanelModule } from 'primeng/panel';
import { AddFilmComponentComponent } from './components/FilmComponents/add-film-component/add-film-component.component';
import { FilmInfoComponentComponent } from './components/FilmComponents/film-info-component/film-info-component.component';
import { UpdateFilmComponentComponent } from './components/FilmComponents/update-film-component/update-film-component.component';
import { DeleteFilmComponentComponent } from './components/FilmComponents/delete-film-component/delete-film-component.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { ToastrModule } from 'ngx-toastr';
import { FilmVisitedComponent } from './components/FilmComponents/film-visited/film-visited.component';
import { SameGenderComponent } from './components/FilmComponents/same-gender/same-gender.component';

@NgModule({
  declarations: [

    AppComponent,
    ListFilmComponentComponent,
    AddFilmComponentComponent,
    FilmInfoComponentComponent,
    UpdateFilmComponentComponent,
    DeleteFilmComponentComponent,
    FilmVisitedComponent,
    SameGenderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PanelModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MaterialFileInputModule,
    NgxPaginationModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
