import { Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { HeaderComponent } from './components/header/header.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';


export const routes: Routes = [
    { path: '', component: HeaderComponent }, // Home page
    { path: 'about', component: AboutMeComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'testimonials', component: TestimonialsComponent },
    { path: 'contact', component:ContactComponent },
    { path: '**', redirectTo: '' } 
];
