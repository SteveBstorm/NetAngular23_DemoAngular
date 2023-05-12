import { Component } from '@angular/core';
import { AuthService } from 'src/app/demos/demo17/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isConnected! : boolean

  constructor(private _service : AuthService){}
  ngOnInit() {
   // this.isConnected = this._service.isConnected
   this._service.statutSubject.subscribe({
    next : (data : boolean) => this.isConnected = data
  })
  }
}
