import { Injectable } from '@angular/core';
import { Professionnel } from '../../model/Professionnel';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';


const proUrl = environment.base_url_Api+'Professionnels';

@Injectable({
  providedIn: 'root'
})
export class ProfessionnelService {

  private currentLoggedInProSubject: BehaviorSubject<Professionnel>;
  public currentUser: Observable<Professionnel>;
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getPro(id: number): Observable<Professionnel> {
    return this.http.get<Professionnel>(proUrl+id);
  }


  getPros(): Observable<Professionnel[]> {
    return this.http.get<Professionnel[]>(proUrl);
  }


//login et logout
public get currentProValue(): Professionnel{
  return this.currentLoggedInProSubject.value;
}

validerPro(courriel: string, password: string):Observable<Professionnel> {
  console.log('${environment.apiUrl}/api/logins');
  const headers = new HttpHeaders({'Content-Type':'application/json',
  'courriel':courriel,
  'psw': password});
  return this.http.get<Professionnel>(proUrl,{headers:headers})
          .pipe(map(user =>{
              // store the user details and jwt in local storage
              localStorage.setItem('currentUser',JSON.stringify(user));
              this.currentLoggedInProSubject.next(user);
              return user;
          }));  
}

logout(){
    localStorage.removeItem('currentUser');
    this.currentLoggedInProSubject.next(null);
}

  searchPros(criteres: string):Observable<Professionnel[]> {
    console.log(criteres);
    return this.http.get<Professionnel[]>(proUrl+"/Professionnels/expertise/"+criteres);
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
}
