import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PostCardComponent } from './shared/components/post-card/post-card.component';
import { DetailsCardComponent } from './shared/components/details-card/details-card.component';
import { PublicationsComponent } from './core/publications/publications.component';
import { NewPostComponent } from './core/new-post/new-post.component';
import { LoginComponent } from './core/login/login.component';
import { SignInComponent } from './core/sign-in/sign-in.component';
import { PublicationDetailsComponent } from './core/publication-details/publication-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PostCardComponent,
    DetailsCardComponent,
    PublicationsComponent,
    NewPostComponent,
    LoginComponent,
    SignInComponent,
    PublicationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
