import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/static/header/header.component';
import { FooterComponent } from './components/static/footer/footer.component';
import { CategoryNavbarComponent } from './components/static/category-navbar/category-navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SingleCategoryComponent } from './components/pages/single-category/single-category.component';
import { SinglePostComponent } from './components/pages/single-post/single-post.component';
import { TermsAndConditionsComponent } from './components/pages/terms-and-conditions/terms-and-conditions.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';
import { CommentFormComponent } from './components/comments/comment-form/comment-form.component';
import { CommentListComponent } from './components/comments/comment-list/comment-list.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { PostCardComponent } from './components/post-card/post-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoryNavbarComponent,
    HomeComponent,
    SingleCategoryComponent,
    SinglePostComponent,
    TermsAndConditionsComponent,
    ContactUsComponent,
    SubscriptionFormComponent,
    CommentFormComponent,
    CommentListComponent,
    AboutUsComponent,
    PostCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
