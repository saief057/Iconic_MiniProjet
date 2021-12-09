import { Injectable } from '@angular/core';
import { CanLoad, UrlSegment, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private router: Router) {
    
  }
  
  canLoad(
    route: Route,
    segments: UrlSegment[]): boolean {
      const token = localStorage.getItem('mytoken');

      if(token)
        return true;
      else {
        this.router.navigateByUrl('/login')
        return false;
      }
      
  }
  
}
