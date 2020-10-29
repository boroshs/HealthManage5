import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// CHANGE THIS IF YOU ADD ANOTHER COMPONENT aka A ROUTE TO ANOTHER PAGE VIEW
// MANUAL import: Components for routing to view
// Does not include "import { TopNavComponent } from './top-nav/top-nav.component';" because top navigation bar is on every page
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RecipeLookupComponent } from './recipe-lookup/recipe-lookup.component';
import { VideoLookupComponent } from './video-lookup/video-lookup.component';
import { SchedulePageComponent } from './schedule-page/schedule-page.component';

// CHANGE THIS IF YOU ADD ANOTHER COMPONENT aka A ROUTE TO ANOTHER PAGE VIEW
// "path" defines URL path for route
// "component" defines component Angular should use for route
const routes: Routes = [
  { path: 'homepage', component: HomepageComponent},
  { path: 'login-page', component: LoginPageComponent},
  { path: 'register-page', component: RegisterPageComponent},
  { path: 'recipe-lookup', component: RecipeLookupComponent},
  { path: 'video-lookup', component: VideoLookupComponent},
  { path: 'schedule-page', component: SchedulePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
