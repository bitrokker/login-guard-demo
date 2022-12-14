import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { LoginGuard } from '../guards/login.guard';


export class RouterPaths {
    public routes: Routes = [
        { path: 'login', component: LoginComponent },
        { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },

        //
        { path: '**', redirectTo: 'login' }
    ]
}
