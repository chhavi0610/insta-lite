import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FeedComponent } from './pages/feed/feed.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [

  ],
  imports: [
    LoginComponent,
    SignupComponent,
    FeedComponent,
    CreatePostComponent,
    ProfileComponent,
    BrowserModule,
  FormsModule,
  HttpClientModule,
  AppComponent
  ],
  bootstrap: []
})
export class AppModule { }
