import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost/InmobeWiseServices/src/";

  private token!: string;
  func!: string | 'false';
  islogged!: boolean | false;

  constructor(private httpClient: HttpClient, private router: Router, @Inject(PLATFORM_ID) private platformId: Object, @Inject(DOCUMENT) private document: Document) { 
    this.platformId = this.platformId;
    const localStorage = document.defaultView?.localStorage;
    if (isPlatformBrowser(this.platformId)) {
      console.log("prints only in browser not in server");
      if (localStorage) {
        this.token = localStorage.getItem("Token") || "";
        this.func = localStorage.getItem("FuncProperties") || "";
        if (this.token) {
          try {
            let decodedToken = jwtDecode(this.token);
            const isExpired = decodedToken && decodedToken.exp ? decodedToken.exp < Date.now() / 1000 : false;

            if (isExpired) {
              localStorage.clear();
              this.router.navigateByUrl("/login");
            } else {
              this.islogged = true;
            }
          } catch (e) {
            localStorage.clear();
            this.router.navigateByUrl("/login");
            console.log(e);
          }
        } else {
          localStorage.clear();
          this.router.navigateByUrl("/login");
        }
      } else {
        console.log("LocalStorage is false")
      }
    }
    if (isPlatformServer(this.platformId)) {
      console.log("prints only in server not in browser");
      if (localStorage) {
        this.token = localStorage.getItem("Token") || "";
        this.func = localStorage.getItem("FuncProperties") || "";
        if (this.token) {
          try {
            let decodedToken = jwtDecode(this.token);
            const isExpired = decodedToken && decodedToken.exp ? decodedToken.exp < Date.now() / 1000 : false;

            if (isExpired) {
              this.router.navigateByUrl("/login");
            } else {
              this.islogged = true;
            }
          } catch (e) {
            this.router.navigateByUrl("/login");
          }
        } else {
          this.router.navigateByUrl("/login");
        }
      } else {
        console.log("LocalStorage is false")
      }
    }
  }  
}
