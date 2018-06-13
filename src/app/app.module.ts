import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
// import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CalendarComponent } from 'ap-angular2-fullcalendar/src/calendar/calendar';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { FullCalendarModule } from 'ng-fullcalendar';
import {AccordionModule} from 'primeng/accordion';
// import {MenuItem} from 'primeng/api';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CalendarModule } from 'angular-calendar';
import {RatingModule} from 'primeng/rating';





import { AppComponent } from './app.component';
import { AppHeaderComponent } from '../common/app-header/app-header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarService } from './service/navbar-service';
import { CalendareventComponent } from './calendarevent/calendarevent.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchDoctorComponent, specialitiesfilterComponent } from './search-doctor/search-doctor.component';
import { BuymedicineComponent } from './buymedicine/buymedicine.component';
import { SettingsComponent } from './settings/settings.component';
import { AppointmentmodelComponent } from './appointmentmodel/appointmentmodel.component';
// import { CalendarComponent } from './calendar/calendar.component';
import { DoctorspecialitesService } from './service/doctorspecialites.service';
import { UiCalenderComponent } from './ui-calender/ui-calender.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LabresultComponent } from './labresult/labresult.component';
import { AllergiesComponent } from './allergies/allergies.component';
import { ImmunizationComponent } from './immunization/immunization.component';
import { DoctorfilterPipe } from './doctorfilter.pipe';
// import {CalendarModule} from 'primeng/calendar';


const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent,
  children: [
    { path: '', redirectTo: 'alergies', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'alergies', component: AllergiesComponent },
    { path: 'labresult', component: LabresultComponent },
    { path: 'immunization', component: ImmunizationComponent }
  ]
},
  { path: 'searchDoctor', component: SearchDoctorComponent },
  { path: 'buyMedicine', component: AppComponent },
  { path: 'settings', component: AppComponent },
  { path: 'appComponent', component: AppComponent },
  // { path: 'dashboard', component: DashboardComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomeComponent,
    LoginComponent,
    CalendarComponent,
    CalendareventComponent,
    ProfileComponent,
    SearchDoctorComponent,
    specialitiesfilterComponent,
    BuymedicineComponent,
    SettingsComponent,
    AppointmentmodelComponent,
    UiCalenderComponent,
    DashboardComponent,
    LabresultComponent,
    AllergiesComponent,
    ImmunizationComponent,
    DoctorfilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    SlideMenuModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    ModalModule.forRoot(),
    // MaterialModule,
    FlexLayoutModule,
    FullCalendarModule,
    CalendarModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    RatingModule,

    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,

  ],
  entryComponents: [AppointmentmodelComponent, specialitiesfilterComponent],
  providers: [NavbarService, DoctorspecialitesService],
  bootstrap: [AppComponent]

})
export class AppModule { }
