import { Routes } from '@angular/router';
import { PageLogin } from './pages/page-login/page-login';
import { HomePage } from './pages/home-page/home-page';
import { AccessDenied } from './auth/pages/access-denied/access-denied';
import { AdminPage } from './pages/admin-page/admin-page';
import { authGuardFn } from './auth/guard/auth.guard.fn';
import { authGuardFnLogout } from './auth/guard/auth.guard.fn.logout';
import { authGuardFnLogin } from './auth/guard/auth.guard.fn.login';
import { AccessDeniedLogin } from './auth/pages/access-denied-login/access-denied-login';

export const routes: Routes = [
    {path:'home', component: HomePage},
    {path:'login', component: PageLogin, canActivate: [authGuardFnLogin]},
    {path:'access-denied', component: AccessDenied, canActivate: [authGuardFnLogout]},
    {path:'access-denied-login', component: AccessDeniedLogin, canActivate: [authGuardFn]},
    {path:'admin', component: AdminPage, canActivate: [authGuardFn]},
    {path:'**', redirectTo:'home', pathMatch:'full'}
];
