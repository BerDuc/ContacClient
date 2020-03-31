import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdentificationComponent } from './identification/identification.component';
import { RechercheProComponent } from './recherche-pro/recherche-pro.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  { path: 'identification', component: IdentificationComponent },
  { path: 'cherchePro', component: RechercheProComponent },
  { path: 'profil/', component: ProfilComponent},
  { path: '', redirectTo: '/identification', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
