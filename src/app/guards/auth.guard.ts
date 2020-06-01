import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService,private router:Router){}
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean
  {
    const currentUser = this.authService.currentUserValue;
    const verif_token = this.authService.loginAuthGuard();
    if(verif_token === true)
    {
      if(currentUser)
      {
        if(route.data.roles && route.data.roles.indexOf(currentUser.role)===-1){
          this.router.navigate(['/']);
          return false;
        }
        return true;
      }
    }
    else
    {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
