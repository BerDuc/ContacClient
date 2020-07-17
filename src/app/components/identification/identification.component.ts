import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ProfessionnelService } from '../../services/ProfessionnelService/professionnel.service';
import { Professionnel } from '../../model/Professionnel';
import { Login } from 'src/app/model/Login';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {

  title = "Identification";
  pro: Professionnel;
  Recu: Login;
  courriel: string;
  mdp: string;
  type_compte: string = "Choisir le type de compte";
  

  loading = false;
 // submitted = false;
  error='';

  constructor(
    private router: Router,
    private service: ProfessionnelService
  ) { }

  ngOnInit(): void {
    
  }

  connecterUtilisateur(): void {
    switch(this.type_compte){
      case "Professionnel": this.connecterPro();
        break;
      case "Client": this.connecterClient();
        break;
      default: break;
    }
  }
  
  connecterClient() {
    throw new Error("Method not implemented.");
  }

  connecterPro(): void {
    this.pro = new Professionnel();
    this.pro.courriel = this.courriel;
    this.pro.mdp = this.mdp;

      this.service.validerPro(this.pro.courriel, this.pro.mdp).subscribe(
        data => {
          this.router.navigate(["/page-perso"]);
        }, 
        error => {
          alert("L'identification a échoué. Vérifiez votre identifiant et votre mot de passe");
          this.error = error;
          this.loading = false;
        }); 
  }

}
