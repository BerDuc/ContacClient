import { Component, OnInit, ComponentRef, ViewContainerRef, ViewChild } from '@angular/core';
import { Professionnel } from '../../model/Professionnel';
import { ProfessionnelService } from '../../services/ProfessionnelService/professionnel.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { VignetteComponent } from '../vignette/vignette.component';


@Component({
  selector: 'app-recherche-pro',
  templateUrl: './recherche-pro.component.html',
  styleUrls: ['./recherche-pro.component.css']
})
export class RechercheProComponent implements OnInit {

  //variables en rapport avec les vignettes
  @ViewChild("viewContainerRef", { read: ViewContainerRef })
  VCR: ViewContainerRef;
  child_unique_key: number = 0;
  componentsReferences = Array<ComponentRef<VignetteComponent>>()


  liste_pro: Professionnel[];
  txtRecherche: string; 


  constructor(
    private router: Router,
    private servicePro: ProfessionnelService) { }

  ngOnInit(): void {    
  }
  
  chercher(){

  }

  afficherPros(): void {
    this.servicePro.getPros().subscribe(pros => this.liste_pro = pros);  
  }

  chercherProsCriteres(): void {
 //   this.servicePro.searchPros().subscribe(pros => this.liste_pro = pros);
  }

}
