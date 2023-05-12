import { Component } from '@angular/core';
import { AuthService, UserTest } from './auth.service';

@Component({
  selector: 'app-demo17',
  templateUrl: './demo17.component.html',
  styleUrls: ['./demo17.component.scss']
})
export class Demo17Component {
  isConnected! : boolean
  user! : UserTest

  constructor(private _service: AuthService){}

  ngOnInit(){
    //this.isConnected = (localStorage.getItem("statut") == "true") ? true : false
    //this.isConnected = this._service.isConnected

    this._service.statutSubject.subscribe({
      next : (data : boolean) => this.isConnected = data
    })

    this.user = JSON.parse(localStorage.getItem("monUser") ?? "")

  }

  login() {
    this._service.login()
    //this.isConnected = this._service.isConnected
  }

  logout() {
    this._service.logout()
    //this.isConnected = this._service.isConnected
  }
}
