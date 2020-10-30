import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { NewPostComponent } from './core/new-post/new-post.component';
import { PublicationDetailsComponent } from './core/publication-details/publication-details.component';
import { PublicationsComponent } from './core/publications/publications.component';
import { SignInComponent } from './core/sign-in/sign-in.component';
import { LoginGuard } from './shared/guards/login.guard';

const routes: Routes = [
  { path: 'publication-details', component: PublicationDetailsComponent },
  { path: 'sign-in', component: SignInComponent},
  { path: 'new-post', component: NewPostComponent, canActivate:[LoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'publication-details', component: PublicationDetailsComponent },
  { path: '', component: PublicationsComponent , pathMatch: 'full' },
  { path: '**', component: PublicationsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
