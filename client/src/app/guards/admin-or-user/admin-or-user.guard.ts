import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminOrUserGuard implements CanActivate {
  private roles: string[] = [];
  isLoggedIn = false;
  isAdmin = false;
  isStudent = false;
  constructor(private router:Router,private tokenStorageService: TokenStorageService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.isLoggedIn = !!this.tokenStorageService.getToken();
      if (this.isLoggedIn){
        const user = this.tokenStorageService.getUser();
        this.roles = user.roles;
        this.isStudent = this.roles.includes('ROLE_USER');
        this.isAdmin = this.roles.includes('ROLE_ADMIN');
      }
      if (this.isAdmin|| this.isStudent) {
        return true;
      }else{
        this.router.navigate(['/unauthorized']);
        return false;
      }
  }
  
}
