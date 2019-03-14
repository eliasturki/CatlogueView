import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {

    this.authService.loadToken();

  }

  constructor(private authService:AuthenticationService) { }

  title = 'catView';

   isAdmin() {
    return this.authService.isAdmin();
  }

   isUser() {
    return this.authService.isUser();
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }

  logout(){
     this.authService.logout();
  }


}
