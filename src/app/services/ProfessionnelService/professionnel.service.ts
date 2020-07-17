import { Injectable } from '@angular/core';
import { Professionnel } from '../../model/Professionnel';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Login } from 'src/app/model/Login';


const proUrl = environment.base_url_Api+'Professionnels/';

@Injectable({
  providedIn: 'root'
})
export class ProfessionnelService {

  private currentProSubject: BehaviorSubject<Professionnel>;
  public currentLogin: Observable<Professionnel>;
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { 
    this.currentProSubject = new BehaviorSubject<Professionnel>(JSON.parse(localStorage.getItem('currentUser')).value);
    this.currentLogin = this.currentProSubject.asObservable();
  }


  createPro(pro: Professionnel):Observable<Professionnel>{
    return this.http.post<Professionnel>(proUrl, JSON.stringify(pro), this.httpOptions);
  }

  modifPro(pro: Professionnel): Observable<any> {
    var url = proUrl+"/"+pro.utilisateurID;
    console.log(url);
    console.log(JSON.stringify(pro));
    return this.http.put(url, JSON.stringify(pro), this.httpOptions);
  }
//login et logout

public get currentProValue(): Professionnel{
  return this.currentProSubject.value;
}

validerPro(courriel: string, password: string):Observable<Professionnel> {
  console.log('${environment.apiUrl}/api/logins');
  const headers = new HttpHeaders({'Content-Type':'application/json',
  'email':courriel,
  'password': password});
  return this.http.get<Professionnel>(proUrl+"Identification",{headers:headers})
          .pipe(map(login =>{
              // store the user details and jwt in local storage
              localStorage.setItem('currentUser',JSON.stringify(login));
              this.currentProSubject.next(login);
              return login;
          }));  
}

logout(){
    localStorage.removeItem('currentUser');
    this.currentProSubject.next(null);
}

///recherche
  searchPros(criteres: string):Observable<Professionnel[]> {
    console.log(criteres);
    return this.http.get<Professionnel[]>(proUrl+"expertise/"+criteres);
  }

  getPro(id: number): Observable<Professionnel> {
    return this.http.get<Professionnel>(proUrl+id);
  }

  getPros(): Observable<Professionnel[]> {
    return this.http.get<Professionnel[]>(proUrl);
  }

}
