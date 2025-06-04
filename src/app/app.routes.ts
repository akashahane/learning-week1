import { Routes } from '@angular/router';
import { AppSkillsComponent } from './app-skills/app-skills.component';
import { AppContactComponent } from './app-contact/app-contact.component';
import { AppBodyComponent } from './app-body/app-body.component';

export const routes: Routes = [
    {path: 'about', component: AppBodyComponent},
    {path:'skills', component: AppSkillsComponent},
    {path:'contact', component: AppContactComponent}
];
