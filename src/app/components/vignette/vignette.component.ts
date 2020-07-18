import { Component, OnInit, Input } from '@angular/core';
import { Professionnel } from '../../model/Professionnel';
import { RechercheProComponent } from '../recherche-pro/recherche-pro.component';

@Component({
  selector: 'app-vignette',
  templateUrl: './vignette.component.html',
  styleUrls: ['./vignette.component.css']
})
export class VignetteComponent implements OnInit {

  @Input() pro: Professionnel;
  unique_key: number;
  parentRef: RechercheProComponent;

  constructor() {}

  ngOnInit(): void {
  }

  afficherDetails(){}
}
