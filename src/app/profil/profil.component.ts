import { Component, OnInit, Input } from '@angular/core';
import { Professionnel } from '../model/Professionnel';
import { Router } from '@angular/router';
import { ProfessionnelService } from '../ProfessionnelService/professionnel.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  @Input() pro: Professionnel;

  constructor(
    private router: Router,
    private servicePro: ProfessionnelService, 
    private location: Location
  ) { }

  ngOnInit(): void {
    
  }

}
