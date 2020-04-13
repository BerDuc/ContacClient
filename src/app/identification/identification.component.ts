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

    this.proRecu = new Professionnel();
    
    this.service.validerPro(this.pro).subscribe(proRecu => this.proRecu = proRecu[0]);

    if(this.proRecu.nom === "mauvaise identification" ){
      alert ("Mauvaise identification");
    } else {
      //activer le profil
      console.log(this.pro);
    }


  }

}
