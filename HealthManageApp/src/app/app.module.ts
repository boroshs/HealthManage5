import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'; // This is from ICP6-APIs

// AUTO imported when you make a component. All components for app views
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RecipeLookupComponent } from './recipe-lookup/recipe-lookup.component';
import { VideoLookupComponent } from './video-lookup/video-lookup.component';
import { SchedulePageComponent } from './schedule-page/schedule-page.component';

// declarations array is AUTO filled when you make a component
@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomepageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    RecipeLookupComponent,
    VideoLookupComponent,
    SchedulePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  // This is from ICP6-APIs
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
