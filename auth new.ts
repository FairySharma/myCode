import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookie: CookieService) { }
  isLoggedIn(){
    if(this.cookie.check("Authenticate")){
    return true;
    }
    return false;
    }
    
    CreateCookie(){
    this.cookie.set("Authenticate","Access Granted");
    }
    
    deleteCookie(){
    this.cookie.delete("Authenticate");
    }
    
    deleteAllCookie(){
    this.cookie.deleteAll();
    }
    
    checkCookie(){
    console.log(this.cookie.check("Authenticate"));
    }

}
