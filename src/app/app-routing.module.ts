import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { SingleCategoryComponent } from './components/pages/single-category/single-category.component';
import { SinglePostComponent } from './components/pages/single-post/single-post.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { TermsAndConditionsComponent } from './components/pages/terms-and-conditions/terms-and-conditions.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'category',
    component: SingleCategoryComponent
  },
  {
    path: 'post',
    component: SinglePostComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'terms-condition',
    component: TermsAndConditionsComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
