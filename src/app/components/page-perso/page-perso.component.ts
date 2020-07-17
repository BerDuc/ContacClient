import { Component, OnInit } from '@angular/core';
import { Professionnel } from '../../model/Professionnel';
import { ProfessionnelService } from 'src/app/services/ProfessionnelService/professionnel.service';

@Component({
  selector: 'app-page-perso',
  templateUrl: './page-perso.component.html',
  styleUrls: ['./page-perso.component.css']
})
export class PagePersoComponent implements OnInit {


    pro: Professionnel;

    //tabs
    profil_tab: boolean = true;
    cv_tab: boolean = false;
    offres_tab: boolean = false;


  constructor(private service: ProfessionnelService) { 
    this.get_pro();    
  }

  ngOnInit(): void {
  }

  get_pro(){
  //  let currentUser = JSON.parse(localStorage.getItem('currentUser'));
//    this.service.getPro(currentUser.value.personne.utilisateurID).subscribe(pro => this.pro = pro); 
    //this.service.currentPro.subscribe(pro => this.pro = pro);
  }

  change_tab(tab_actif){
    this.profil_tab = false;
    this.cv_tab= false;
    this.offres_tab = false;

    switch(tab_actif){
      case "profil_tab":
        this.profil_tab = true;
        break;
      case "cv_tab":
        this.cv_tab = true;
        break;
      case "offres_tab":
        this.offres_tab = true;
        break;
      default: break;
    }
  }

    modifier_nom(){}
    modifier_contact(){}
    modifier_specialisation(){}

}
