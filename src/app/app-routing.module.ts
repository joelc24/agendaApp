import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/guards/auth.guard';
import { loggedInGuardGuard } from './auth/guards/logged-in-guard.guard';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: ()=> import("./auth/auth.module").then(m => m.AuthModule),
    canActivate: [loggedInGuardGuard]
  },
  {
    path: "agenda",
    loadChildren: ()=> import("./agenda/agenda.module").then(m => m.AgendaModule),
    canActivate: [authGuard]
  },
  {
    path: "",
    redirectTo: "agenda",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
