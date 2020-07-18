import { 
  Component, 
  OnInit, 
  ComponentRef, 
  ViewContainerRef, 
  ViewChild,
  ComponentFactoryResolver 
} from '@angular/core';
import { Professionnel } from '../../model/Professionnel';
import { ProfessionnelService } from '../../services/ProfessionnelService/professionnel.service';
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
  critere: string;

  constructor(
      private router: Router,
      private servicePro: ProfessionnelService,
      private CFR: ComponentFactoryResolver
    ) { }

  ngOnInit(): void {    
  }
  
  chercher(){
    let liste_motscles = this.txtRecherche.replace(" ", ";"); 
    this.servicePro.searchPros(this.critere, liste_motscles).subscribe(liste => {
      this.liste_pro = liste;
      this.afficherPros(); 
    }); 
  }

  afficherPros(){
    this.remove_all_vignettes();
    this.liste_pro.forEach(pro => {
      this.addPro(pro); 
    });
  }

 //gestion des composants enfants - anodization_line
 public addPro(pro: Professionnel) {
  console.log("addPro. pro="+JSON.stringify(pro)); 
  let componentFactory = this.CFR.resolveComponentFactory(VignetteComponent);
  let childComponentRef = this.VCR.createComponent(componentFactory);
  let childComponent = childComponentRef.instance;

  childComponent.unique_key = ++this.child_unique_key;
  childComponent.parentRef = this;
  childComponent.pro = pro;

  this.componentsReferences.push(childComponentRef);
}


public remove_pro(key: number) {
  if (this.VCR.length < 1) return;

  let componentRef = this.componentsReferences.find(
    x => x.instance.unique_key == key
  );
  let vcrIndex: number = this.VCR.indexOf(componentRef.hostView);
  // removing component from container
  this.VCR.remove(vcrIndex);

  // removing component from the list
  this.componentsReferences = this.componentsReferences.filter(
    x => x.instance.unique_key !== key
  );
}

remove_all_vignettes(){
  this.VCR.clear();
  this.componentsReferences = [];
}


}
