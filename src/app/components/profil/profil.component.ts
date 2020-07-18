import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() changements: boolean;
  @Output() changementsChange = new EventEmitter<boolean>();

  modeEdition: boolean = false; 





  constructor(
    private route: ActivatedRoute,
    private servicePro: ProfessionnelService, 
      ) {   }

  ngOnInit(): void {
  }



  ouvrir_mode_modification(): void {
    this.modeEdition = true;
  }

  changerPresentation(): void{
  //  this.servicePro.modifPro(this.pro).subscribe();
  console.log("changements = "+this.changements);
    this.modeEdition = false;
    this.changements = true;
    this.changementsChange.emit(this.changements);
  }


}
