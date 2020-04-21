import { Injectable } from '@angular/core';
import { Professionnel } from '../model/Professionnel';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})

export class ProfessionnelService {

  private proUrl = 'https://localhost:44307/api/Professionnels';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getPro(id: number): Observable<Professionnel> {
    return this.http.get<Professionnel>(this.proUrl+'/'+id);
  }


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

  searchPros(criteres: string):Observable<Professionnel[]> {
    console.log(criteres);
    return this.http.get<Professionnel[]>(this.proUrl+"/Professionnels/expertise/"+criteres);
  }

  createPro(pro: Professionnel):Observable<Professionnel>{
    var body = pro.toJSON();
    console.log(body);
    return this.http.post<Professionnel>(this.proUrl, body, this.httpOptions);
  }

  modifPro(pro: Professionnel, champs: string, value: string): void {
    this.http.put<Professionnel>(this.proUrl, pro, this.httpOptions);
  }
}
