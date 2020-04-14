import { Injectable } from '@angular/core';
import { Professionnel } from '../model/Professionnel';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProfessionnelService {

  private proUrl = 'https://localhost:44307/api/Professionnels';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getPros(): Observable<Professionnel[]> {
    return this.http.get<Professionnel[]>(this.proUrl);
  }

  validerPro(pro: Professionnel):Observable<Professionnel[]>{
    //idéalement, ça devrait être GET, mais j'ai besoin d'un body, donc ce sera POST pour le moment
    return this.http.post<Professionnel[]>(this.proUrl+"/Identification", 
      {
        courriel: pro.courriel,
        mdp: pro.mdp
      }, 
      this.httpOptions); 
  }  

  searchPros():Observable<Professionnel[]> {
    return this.http.get<Professionnel[]>(this.proUrl+"/Professionnels/Recherche");
  }

  createPro(pro: Professionnel):Observable<Professionnel>{
    return this.http.post<Professionnel>(this.proUrl, 
      {
        nom: pro.nom,
        prenom: pro.prenom,
        courriel: pro.courriel,
        mdp: pro.mdp
      }
      , this.httpOptions);
  }
}
