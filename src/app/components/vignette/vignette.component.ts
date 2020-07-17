import { Component, OnInit, Input } from '@angular/core';
import { Professionnel } from '../../model/Professionnel';

@Component({
  selector: 'app-vignette',
  templateUrl: './vignette.component.html',
  styleUrls: ['./vignette.component.css']
})
export class VignetteComponent implements OnInit {

  @Input() pro: Professionnel;

  constructor() { }

  ngOnInit(): void {
  }

  afficherDetails(){}
}
