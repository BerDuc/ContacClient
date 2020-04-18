import { Component, OnInit, Input } from '@angular/core';
import { Professionnel } from '../model/Professionnel';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProfessionnelService } from '../ProfessionnelService/professionnel.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  @Input() pro: Professionnel;

  constructor(
    private route: ActivatedRoute,
    private servicePro: ProfessionnelService, 
      ) {   }

  ngOnInit(): void {
    //ici, initialiser pro
    this.initialiserPro();    
  }

  private initialiserPro() {
    console.log("initialiserPro");
    let id = this.route.snapshot.paramMap.get('id');
    this.servicePro.getPro(parseInt(id)).subscribe(pro => this.pro = pro);
  }

}
