import { Component, OnInit } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private authService: AuthService) {}

   user : any;

  ngOnInit(): void { }
 



}
