import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthGuard } from './guards/auth.guard';
import { DefaultModule } from './layouts/default/default.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { FooterComponent } from './components/admin-components/footer/footer.component';
import { HeaderComponent } from './components/admin-components/header/header.component';
import { AdminComponentsComponent } from './components/admin-components/admin-components.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {HighchartsChartModule} from 'highcharts-angular';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatNativeDateModule} from '@angular/material/core';
import { AdduserComponent } from './components/admin-components/modules/adduser/adduser.component';
import { DashboardComponent } from './components/admin-components/modules/dashboard/dashboard.component';
import { UpdateuserComponent } from './components/admin-components/modules/updateuser/updateuser.component';
import { DeleteuserComponent } from './components/admin-components/modules/deleteuser/deleteuser.component';
import { SidebarComponent } from './components/admin-components/sidebar/sidebar.component';
import { AreaComponent } from './components/admin-components/widgets/area/area.component';
import { CardComponent } from './components/admin-components/widgets/card/card.component';
import { PieComponent } from './components/admin-components/widgets/pie/pie.component';
import { from } from 'rxjs';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { RegisterComponentComponent } from './components/register-component/register-component.component';
import { HomeComponent } from './components/home/home.component';
import { MainHeaderComponent } from './shared/main-header/main-header.component';
import { MainFooterComponent } from './shared/main-footer/main-footer.component';
import { MainPreviewSliderComponent } from './shared/main-preview-slider/main-preview-slider.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LogoutComponent } from './components/logout/logout.component';



@NgModule({
  declarations: [

    AppComponent,
    ListFilmComponentComponent,
    AddFilmComponentComponent,
    FilmInfoComponentComponent,
    UpdateFilmComponentComponent,
    DeleteFilmComponentComponent,
    FilmVisitedComponent,
    SameGenderComponent,
    FooterComponent,
    HeaderComponent,
    AdminComponentsComponent,
    AdduserComponent,
    DashboardComponent,
    UpdateuserComponent,
    DeleteuserComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    HomeComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainPreviewSliderComponent,
    NotFoundComponent,
    LogoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    PanelModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MaterialFileInputModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    DefaultModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    HighchartsChartModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule
  ],
  providers: [AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
