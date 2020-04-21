import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../model/Utilisateur';
import { Professionnel } from '../model/Professionnel';
import { ProfessionnelService } from '../ProfessionnelService/professionnel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation-profil',
  templateUrl: './creation-profil.component.html',
  styleUrls: ['./creation-profil.component.css']
})
export class CreationProfilComponent implements OnInit {

  profil : Utilisateur; 
  
  nom: string;
  prenom: string; 
  courriel: string;
  mdp: string;

  utilisateur: Utilisateur;

  constructor(
    private router: Router,
    private service: ProfessionnelService
  ) { }

  ngOnInit(): void {
  }

  creerProfil(): void {
    let pro = new Professionnel();
    pro.nom = this.nom;
    pro.prenom = this.prenom;
    pro.courriel = this.courriel;
    pro.mdp = this.mdp;

    //plus tard, ajouter une sélection sur le type d'utilisateur


    let promise = new Promise((resolve, reject) => {
      this.service.createPro(pro).toPromise().then( proRecu =>
        {
          console.log("dans creation-profil: "+pro);
          this.router.navigate(['profil/'+proRecu.utilisateurID]);
          resolve();
        });
    });

  }

}
