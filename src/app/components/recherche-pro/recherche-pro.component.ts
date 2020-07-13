import { Component, OnInit } from '@angular/core';
import { Professionnel } from '../../model/Professionnel';
import { ProfessionnelService } from '../../services/ProfessionnelService/professionnel.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recherche-pro',
  templateUrl: './recherche-pro.component.html',
  styleUrls: ['./recherche-pro.component.css']
})
export class RechercheProComponent implements OnInit {

  liste_pro: Professionnel[];

  // criteres: string;

  constructor(
    private router: Router,
    private servicePro: ProfessionnelService) { }

  ngOnInit(): void {    
  }
  
  afficherPros(): void {
    this.servicePro.getPros().subscribe(pros => this.liste_pro = pros);  
  }

  chercherProsCriteres(): void {
 //   this.servicePro.searchPros().subscribe(pros => this.liste_pro = pros);
  }

}
