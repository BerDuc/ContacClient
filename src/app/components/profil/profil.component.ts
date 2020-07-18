import { Component, OnInit, Input } from '@angular/core';
import { Professionnel } from '../../model/Professionnel';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProfessionnelService } from '../../services/ProfessionnelService/professionnel.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  @Input() pro: Professionnel;
  modeEdition: boolean = false; 





  constructor(
    private route: ActivatedRoute,
    private servicePro: ProfessionnelService, 
      ) {   }

  ngOnInit(): void {
    //ici, initialiser pro
  }



  ouvrir_mode_modification(): void {
    this.modeEdition = true;
  }

  changerPresentation(): void{
  //  this.servicePro.modifPro(this.pro).subscribe();
    this.modeEdition = false;
  }


}
