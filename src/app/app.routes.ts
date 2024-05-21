import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadChildren: () => import("./web/web.module").then(w => w.WebModule)},
    {path: 'auth', loadChildren: () => import("./auth/auth.module").then(w => w.AuthModule)},
    {path: 'admin', loadChildren: () => import("./admin/admin.module").then(w => w.AdminModule)}
];
