import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header-connecte',
  templateUrl: './header-connecte.component.html',
  styleUrls: ['./header-connecte.component.css']
})
export class HeaderConnecteComponent {
  constructor(public userService: UserService, private router: Router) { }
  
  logout() {
   this.router.navigate(['loginE']);
  }



}
