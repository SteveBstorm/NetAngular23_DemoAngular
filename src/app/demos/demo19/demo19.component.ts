import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-demo19',
  templateUrl: './demo19.component.html',
  styleUrls: ['./demo19.component.scss']
})
export class Demo19Component {

  userList! : User[]

  email!: string
  password! : string
  constructor(private _client : HttpClient) {}

  ngOnInit() {
    this._client.get<User[]>('https://localhost:7060/api/user').subscribe({
      next : (data : User[]) => this.userList = data,
      error : (myError) => alert(myError.statusText)
    })
  }

  login() {
    let myUser = {
      email : this.email,
      password : this.password
    }

    this._client.post('https://localhost:7060/api/user/login',
    myUser,
    {"responseType" : "text"} //configuration spécifique dans le cas ou je ne reçois qu'un string ! A ne pas mettre si je recois un objet
    ).subscribe({
      next : (token : string) => console.log(token)
    })
  }
}
