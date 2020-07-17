import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdentificationComponent } from './components/identification/identification.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RechercheProComponent } from './components/recherche-pro/recherche-pro.component';
import { ProfilComponent } from './components/profil/profil.component';
import { CreationProfilComponent } from './components/creation-profil/creation-profil.component';
import { FormsModule } from '@angular/forms';
import { VignetteComponent } from './components/vignette/vignette.component';
import { FicheComponent } from './components/fiche/fiche.component';
import { PagePersoComponent } from './components/page-perso/page-perso.component';

@NgModule({
  declarations: [
    AppComponent,
    IdentificationComponent,
    RechercheProComponent,
    ProfilComponent,
    CreationProfilComponent,
    VignetteComponent,
    FicheComponent,
    PagePersoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ Location ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (private http: HttpClient){} //pas sûr que ça va là. Ref: angular-notes-de-cours p.40
 }
