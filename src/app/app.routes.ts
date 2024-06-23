import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ImpressumComponent } from './impressum/impressum.component';


export const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'impressum', component: ImpressumComponent},
];
