import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { ModalComponent } from './components/modal/modal.component';
import { HomeSectionComponent } from './sections/home-section/home-section.component';
import { SkillsSectionComponent } from './sections/skills-section/skills-section.component';
import { ProjectsSectionComponent } from './sections/projects-section/projects-section.component';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { ContactSectionComponent } from './sections/contact-section/contact-section.component';
import { ImageHeaderComponent } from './components/image-header/image-header.component';
import { DetailSectionComponent } from './sections/detail-section/detail-section.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FilterByCategoryPipe } from './pipes/filter-by-category.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ParseMarkdownPipe } from './pipes/parse-markdown.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortfolioComponent,
    ProjectDetailComponent,
    ModalComponent,
    HomeSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    AboutSectionComponent,
    ContactSectionComponent,
    ImageHeaderComponent,
    DetailSectionComponent,
    PageNotFoundComponent,
    FilterByCategoryPipe,
    TruncatePipe,
    ParseMarkdownPipe,
    SafeUrlPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
