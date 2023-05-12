import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //isConnected! : boolean

  get isConnected() : boolean {
    return localStorage.getItem("statut") == "true" ? true : false
  }

  statutSubject : Subject<boolean> = new Subject<boolean>()

  user : UserTest =  {
    login : "arthur",
    pwd : "cuillere"
  }
  constructor() { }

  login() {
    //this._isConnected = true
    localStorage.setItem("statut", "true")
    sessionStorage.setItem("status", "true")
    localStorage.setItem("monUser", JSON.stringify(this.user))

    this.statutSubject.next(this.isConnected)
  }

  logout() {
    //this.isConnected = false
    localStorage.removeItem("statut")
    localStorage.clear()
    this.statutSubject.next(this.isConnected)

  }
}

export interface UserTest {
  login: string
  pwd : string
}
