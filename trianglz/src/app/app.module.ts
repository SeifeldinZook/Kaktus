import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'ng-sidebar';
import { HighlightedDriversComponent } from './highlighted-drivers/highlighted-drivers.component';
import { HighlightedSegmentsComponent } from './highlighted-segments/highlighted-segments.component';
import { HighlightedCommentsComponent } from './highlighted-comments/highlighted-comments.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    NotfoundComponent,
    ProfileComponent,
    HighlightedDriversComponent,
    HighlightedSegmentsComponent,
    HighlightedCommentsComponent,
    StatisticsComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
