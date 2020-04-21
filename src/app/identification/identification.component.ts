import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ProfessionnelService } from '../ProfessionnelService/professionnel.service';
import { Professionnel } from '../model/Professionnel';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {

  title = "Identification";
  pro: Professionnel;
  proRecu: Professionnel;
  courriel: string;
  mdp: string;
  type: string;
  

  constructor(
    private router: Router,
    private service: ProfessionnelService
  ) { }

  ngOnInit(): void {

  }

  connecterUtilisateur(): void {
    this.pro = new Professionnel();
    this.pro.courriel = this.courriel;
    this.pro.mdp = this.mdp;

//    this.proRecu = new Professionnel();

    let promise = new Promise((resolve, reject) => {
      this.service.validerPro(this.pro).toPromise().then( proRecu =>
        {
          this.validerEtNaviguer(proRecu[0]);
          resolve();
        });
    });

  }

  private validerEtNaviguer(proRecu: Professionnel){ 

    if(proRecu.nom === "mauvaise identification"){
      alert(proRecu.nom);
    } else {
      this.router.navigate(['profil/'+proRecu.utilisateurID]);
    }
  }
}
