import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ProfessionnelService } from '../services/ProfessionnelService/professionnel.service';

@Injectable({
  providedIn: 'root'
})
export class AuthProGuardGuard implements CanActivate {

  constructor(private authService: ProfessionnelService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      const currentUser = this.authService.currentUserValue;

      if (currentUser){
        // user authentied
        return true;
      }
    
    // user not logged in
      this.router.navigate(['identification'],{queryParams:{returnUrl:state.url}});
      return false; }  
  
  
}
