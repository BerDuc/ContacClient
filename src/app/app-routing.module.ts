import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdentificationComponent } from './components/identification/identification.component';
import { RechercheProComponent } from './components/recherche-pro/recherche-pro.component';
import { ProfilComponent } from './components/profil/profil.component';
import { CreationProfilComponent } from './components/creation-profil/creation-profil.component';
import { AuthProGuardGuard } from './helpers/auth-pro-guard.guard';

const routes: Routes = [
  { path: 'identification', component: IdentificationComponent },
  { path: 'cherchePro', component: RechercheProComponent },
  { path: 'profil/:id', component: ProfilComponent, canActivate: [AuthProGuardGuard]},
  { path: 'creation-profil', component: CreationProfilComponent},
  { path: '', redirectTo: '/identification', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
