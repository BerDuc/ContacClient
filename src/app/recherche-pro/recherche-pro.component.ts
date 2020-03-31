import { Component, OnInit } from '@angular/core';
import { Professionnel } from '../model/Professionnel';
import { ProfessionnelService } from '../ProfessionnelService/professionnel.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recherche-pro',
  templateUrl: './recherche-pro.component.html',
  styleUrls: ['./recherche-pro.component.css']
})
export class RechercheProComponent implements OnInit {

  liste_pro: Professionnel[];
  chercherProActivated: string;
  chercherProTerminated: string;
  click: string;

  constructor(
    private router: Router,
    private servicePro: ProfessionnelService) { }

  ngOnInit(): void {
    
    
  }
  
  chercherPros(): void {
    this.servicePro.getPros().subscribe(pros => this.liste_pro = pros);  
  }

}
